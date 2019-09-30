import { firestore } from "../../firebase/firebase.utils.js";
import { fetchLinksItems, setShowedLink } from "./links.actions.js";
import { resetInput } from "../input/input.actions";
import { toggleAdd, toggleEdit } from "../modal/modal.actions";
import { selectLinkActive } from '../links/links.selectors.js'
import { store } from '../store.js';

export const getLinksItems = () => {
  var globalState = store.getState();
  const links = [];

  // On obtient la référence de la collection links
  const colRef = firestore.collection("links");

  return dispatch => {
    // On obtient tout les documents de la collection links
    colRef
      .get()
      .then(function(querySnapShot) {
        if (querySnapShot.docs) {
          // Construction de l'objet links depuis la collection de document firebase
          querySnapShot.docs.map(linkDocument => {
            var currentLink = linkDocument.data();
            currentLink["id"] = linkDocument.id;
            return links.push(currentLink);
          });
          dispatch(fetchLinksItems(links));
          dispatch(updateShowedLink(links, globalState.links.active));
        } else {
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  };
};

export const addLinkItem = (linksItems, link, pagination) => {
  return dispatch => {
    // On obtient la référence de la collection links
    const colRef = firestore.collection("links");
    // On ajoute le nouveau linkItem comme nouveau document
    colRef
      .add(link)
      .then(function(docRef) {
        console.log("Document successfully written!");
        link["id"] = docRef.id;
        var data = [];
        linksItems.map(currentLink => {
          data.push(currentLink);
        });
        data.push(link);
        dispatch(fetchLinksItems(data));
        updateShowedLink(linksItems, pagination);
        dispatch(resetInput());
        dispatch(toggleAdd());
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };
};

export const updateLinkItem = (linksItems, inputValues) => {
  return dispatch => {
    const docRef = firestore.collection("links").doc(inputValues.id);

    var data = [];
    linksItems.map(link => {
      if (link.id === inputValues.id) {
        data.push(inputValues);
      } else {
        data.push(link);
      }
    });
    docRef.set(inputValues);
    dispatch(fetchLinksItems(data));
    dispatch(resetInput());
    dispatch(toggleEdit());
  };
};

export const deleteLinkItem = (linksItems, docId) => {
  firestore
    .collection("links")
    .doc(docId)
    .delete()
    .then(function() {
      console.log("Document successfully deleted!");
      return linksItems.filter(linkItem => linkItem.id !== docId);
    })
    .catch(function(error) {
      console.error("Error removing document: ", error);
      return linksItems;
    });
  return linksItems.filter(linkItem => linkItem.id !== docId);
};

export const updateShowedLink = (linksItems, pagination) => {
  return dispatch => {
    // Construction du tableau des liens visible en récupérant le numéro de pagination et l'ensemble des items
    var showedLink = [];
    var startingIndex = (pagination - 1) * 4;
    console.log(startingIndex);

    for (var i = startingIndex; i < startingIndex + 4; i++) {
      if (linksItems[i]) {
        showedLink.push(linksItems[i]);
      }
    }
    dispatch(setShowedLink(showedLink));
  };
};
