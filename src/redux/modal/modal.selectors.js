import { createSelector } from "reselect";

const selectModalsState = state => state.modals;

export const selectModalsVisibility = createSelector(
  [selectModalsState],
  modals => modals
);
    