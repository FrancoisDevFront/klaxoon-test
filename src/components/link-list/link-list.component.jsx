import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Table } from "react-bootstrap";

import "./link-list.styles.scss";

import LinkItem from "../link-item/link-item.component.jsx";
import PaginationLinkList from "../pagination-link-list/pagination-link-list.component.jsx";

import {
  selectLinksItems,
  selectShowedLink
} from "../../redux/links/links.selectors.js";
import { updateShowedLink } from "../../redux/links/links.utils.js";

const LinkList = ({ showedLink }) => {
  return (
    <section>
      <Table className="link-list" striped bordered hover variant="dark">
        <tbody>
          {showedLink.map(({ id, ...otherProps }) => (
            <LinkItem key={id} id={id} {...otherProps}></LinkItem>
          ))}
        </tbody>
      </Table>
      <PaginationLinkList></PaginationLinkList>
    </section>
  );
};

const mapStateToProps = state =>
  createStructuredSelector({
    linksItems: selectLinksItems,
    showedLink: selectShowedLink
  });

const mapDispatchToProps = dispatch => ({
  updateShowedLink: (linksItems, pagination) =>
    dispatch(updateShowedLink(linksItems, pagination))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkList);
