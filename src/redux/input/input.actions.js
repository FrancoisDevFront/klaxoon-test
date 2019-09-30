import { InputActionsTypes } from "./input.types.js";

export const toggleVisibility = (visibility) => ({
  type: InputActionsTypes.TOGGLE_DURATION,
  payload: visibility
});

export const updateInput = (data) => ({
  type: InputActionsTypes.UPDATE_INPUT,
  payload: data
});

export const resetInput = () => ({
  type: InputActionsTypes.RESET_INPUT,
});
