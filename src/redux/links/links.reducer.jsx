import { LinksActionsTypes } from "./links.types.js";
import { deleteLinkItem } from "./links.utils.js"

const INITIAL_STATE = {
  linksItems: [],
  editLinkId: null,
  showedLink: [],
  active: 1
};

const linkReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LinksActionsTypes.GET_LINKS:
      return {
        ...state,
        linksItems: action.payload
      };
      break;
      case LinksActionsTypes.ADD_LINK:
        state.linksItems.push(action.payload);
        return {
        ...state,
        linksItems: state.linksItems
      };
      break;
      case LinksActionsTypes.DELETE_LINK:
      return {
        ...state,
        linksItems: deleteLinkItem(state.linksItems, action.payload)
      };
      break;
      case LinksActionsTypes.EDIT_ID:
      return {
        ...state,
        editLinkId: action.payload
      };
      break;
      case LinksActionsTypes.SHOWED_LINK:
      return {
        ...state,
        showedLink: action.payload
      }
      break;
      case LinksActionsTypes.SET_ACTIVE:
      return {
        ...state,
        active: action.payload
      }
      break;
    default:
      return state;
  }
};

export default linkReducer;
