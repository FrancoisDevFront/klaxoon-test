import { LinksActionsTypes } from "./links.types.js";

export const fetchLinksItems = (linksItems) => ({
  type: LinksActionsTypes.GET_LINKS,
  payload: linksItems
});

export const addLinkItemAction = (link) => ({
  type: LinksActionsTypes.ADD_LINK,
  payload: link
});

export const deleteLinkItem = (idLinkToRemove) => ({
  type: LinksActionsTypes.DELETE_LINK,
  payload: idLinkToRemove
});

export const setEditLinkId = id => ({
  type: LinksActionsTypes.EDIT_ID,
  payload: id
})

export const setShowedLink = links => ({
  type: LinksActionsTypes.SHOWED_LINK,
  payload: links
})

export const setActive = number => ({
  type: LinksActionsTypes.SET_ACTIVE,
  payload: number
})