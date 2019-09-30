import { createSelector } from "reselect";

const selectInput = state => state.input;

export const selectDurationVisibility = createSelector(
    [selectInput],
    input => input.hidden,
  );

  export const selectInputStatesValues = createSelector(
    [selectInput],
    input => input.inputStatesValues,
  );