import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Modal, Button } from "react-bootstrap";

import AddLinkForm from "../add-link-form/add-link-form.component.jsx";
import {
  toggleVisibility,
  resetInput
} from "../../redux/input/input.actions.js";
import { selectModalsVisibility } from "../../redux/modal/modal.selectors.js";
import { toggleAdd } from "../../redux/modal/modal.actions.js";

import "./add-link-modal.styles.scss";

class AddLinkModal extends React.Component {
  constructor() {
    super();
  }

  handleClose = () => {
    const { toggleAdd, resetInput } = this.props;
    toggleAdd();
    resetInput();
  }

  componentDidMount() {
    const { toggleVisibility, linkToEdit, resetInput } = this.props;
    resetInput();
    toggleVisibility("true");
  }

  componentWillUnmount() {
    const { toggleVisibility } = this.props;
    toggleVisibility("true");
  }

  render() {
    const { modalsVisibility } = this.props;
    return (
      <Modal
        show={modalsVisibility.addVisibility}
        onHide={this.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a link</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AddLinkForm></AddLinkForm>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={this.handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleVisibility: visibility => dispatch(toggleVisibility(visibility)),
  resetInput: () => dispatch(resetInput()),
  toggleAdd: () => dispatch(toggleAdd()),
});

const mapStateToProps = state =>
  createStructuredSelector({
    modalsVisibility: selectModalsVisibility,
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddLinkModal);
