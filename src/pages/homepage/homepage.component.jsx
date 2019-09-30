import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { getLinksItems } from "../../redux/links/links.utils.js";
import { selectLinksItems } from "../../redux/links/links.selectors.js";

import "./homepage.styles.scss";

import LinkList from "../../components/link-list/link-list.component.jsx";
import AddLinkModal from "../../components/add-link-modal/add-link-modal.component.jsx";
import EditLinkModal from "../../components/edit-link-modal/edit-link-modal.component.jsx";

class HomePage extends React.Component {


  render() {
    this.props.getLinksItems();
    return (
      <div>
        <h1>List Page</h1>
        <LinkList></LinkList>
        <AddLinkModal></AddLinkModal>
        <EditLinkModal></EditLinkModal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getLinksItems: () => dispatch(getLinksItems())
});

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
