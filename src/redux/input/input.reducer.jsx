import { InputActionsTypes } from "./input.types.js";

const INITIAL_STATE = {
  hidden: true,
  inputStatesValues: {
    url: "",
    title: "",
    author: "",
    date: "",
    width: "",
    height: "",
    duration: ""
  }
};

const inputReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case InputActionsTypes.TOGGLE_DURATION:
      return {
        ...state,
        hidden: action.payload
      };
    case InputActionsTypes.UPDATE_INPUT:
      return {
        ...state,
        inputStatesValues: action.payload
      };
    case InputActionsTypes.RESET_INPUT:
      return {
        ...state,
        inputStatesValues: INITIAL_STATE.inputStatesValues
      };
    default:
      return state;
  }
};

export default inputReducer;
