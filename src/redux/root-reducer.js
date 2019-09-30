import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import linkReducer from './links/links.reducer.jsx'
import inputReducer from './input/input.reducer.jsx'
import modalReducer from './modal/modal.reducer.jsx'

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  links: linkReducer,
  input: inputReducer,
  modals: modalReducer 
});

export default persistReducer(persistConfig, rootReducer);
