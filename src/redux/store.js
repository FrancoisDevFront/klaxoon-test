import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from 'redux-thunk';


import rootReducer from "./root-reducer";

const middlewares = [];


if (process.env.NODE_ENV === "development") {
  middlewares.push(thunk);
  middlewares.push(logger);
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

export const persistor = persistStore(store);

export default { store, persistor };
