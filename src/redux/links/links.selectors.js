import { createSelector } from "reselect";

const selectLink = state => state.links;

export const selectLinksItems = createSelector(
  [selectLink],
  links => links.linksItems
);

export const selectShowedLink = createSelector(
  [selectLink],
  links => links.showedLink
);


export const selectEditLinkId = createSelector(
    [selectLink],
    links => links.editLinkId
);

export const selectLinkActive = createSelector(
  [selectLink],
  links => links.active
);
