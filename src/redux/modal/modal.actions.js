import { ModalActionsTypes } from "./modal.types.js";

export const toggleAdd = () => ({
  type: ModalActionsTypes.TOGGLE_ADD,
});

export const toggleEdit = () => ({
  type: ModalActionsTypes.TOGGLE_EDIT,
});
