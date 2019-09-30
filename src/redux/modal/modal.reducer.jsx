import { ModalActionsTypes } from "./modal.types.js";

const INITIAL_STATE = {
  editVisibility: false,
  addVisibility: false
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ModalActionsTypes.TOGGLE_ADD:
      return {
        ...state,
        addVisibility: !state.addVisibility,
        editVisibility: false
      };
    case ModalActionsTypes.TOGGLE_EDIT:
      return {
        ...state,
        addVisibility: false,
        editVisibility: !state.editVisibility
      };
    default:
      return state;
  }
};

export default modalReducer;
