import React from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { createStructuredSelector } from "reselect";

import AddLinkForm from "../add-link-form/add-link-form.component.jsx";
import {
  toggleVisibility,
  resetInput,
  updateInput
} from "../../redux/input/input.actions.js";
import {
  selectLinksItems,
  selectEditLinkId
} from "../../redux/links/links.selectors.js";
import { setEditLinkId } from "../../redux/links/links.actions.js";
import { selectModalsVisibility } from "../../redux/modal/modal.selectors.js";
import { toggleEdit } from "../../redux/modal/modal.actions.js";

import "./edit-link-modal.styles.scss";

class EditLinkModal extends React.Component {
  constructor() {
    super();
  }

  handleClose = () => {
    const { toggleEdit, resetInput, setEditLinkId } = this.props;
    toggleEdit();
    resetInput();
    setEditLinkId(null);
  };

  componentDidMount() {
    const { toggleVisibility } = this.props;
    toggleVisibility("true");
  }

  componentWillUnmount() {
    const { toggleVisibility } = this.props;
    toggleVisibility("true");
  }

  render() {
    const {
      modalsVisibility,
      toggleEdit,
      updateInput,
      linksItems,
      currentId
    } = this.props;

    if (modalsVisibility.editVisibility) {
      var linkData = linksItems.filter(link => link.id === currentId);
      updateInput(linkData[0]);
    }

    return (
      <div>
        <Modal show={modalsVisibility.editVisibility} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Link</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <AddLinkForm linkData={true}></AddLinkForm>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleVisibility: visibility => dispatch(toggleVisibility(visibility)),
  resetInput: () => dispatch(resetInput()),
  toggleEdit: () => dispatch(toggleEdit()),
  setEditLinkId: id => dispatch(setEditLinkId(id)),
  updateInput: inputValues => dispatch(updateInput(inputValues))
});

const mapStateToProps = currentId =>
  createStructuredSelector({
    modalsVisibility: selectModalsVisibility,
    currentId: selectEditLinkId,
    linksItems: selectLinksItems
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditLinkModal);
