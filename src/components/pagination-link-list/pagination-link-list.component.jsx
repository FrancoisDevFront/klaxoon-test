import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Pagination } from "react-bootstrap";

import "./pagination-link-list.styles.scss";

import PaginationLinkItem from "../pagination-link-item/pagination-link-item.component.jsx";

import {
  selectLinksItems,
  selectLinkActive
} from "../../redux/links/links.selectors.js";
import { setActive } from "../../redux/links/links.actions.js";
import { updateShowedLink } from "../../redux/links/links.utils.js";

class PaginationLinkList extends React.Component {
  constructor() {
    super();
  }

  handleClick = pagination => {
    const { linksItems, updateShowedLink, setActive } = this.props;
    updateShowedLink(linksItems, pagination);
    setActive(pagination);
  };

  render() {
    const { linksItems, linkActive } = this.props;
    // On calcule le nombre de pagination
    var total = Math.ceil(linksItems.length / 4);
    console.log(total);
    var items = [];
    for (var i = 1; i <= total; i++) {
      items.push(
        <PaginationLinkItem
          key={i}
          handleClick={this.handleClick.bind(null, i)}
          active={i === linkActive ? true : false}
        >
          {i}
        </PaginationLinkItem>
      );
    }

    return <Pagination>
    {items}
    </Pagination>;
  }
}

const mapStateToProps = state =>
  createStructuredSelector({
    linksItems: selectLinksItems,
    linkActive: selectLinkActive
  });

const mapDispatchtoProps = dispatch => ({
  updateShowedLink: (linksItems, pagination) =>
    dispatch(updateShowedLink(linksItems, pagination)),
  setActive: pagination => dispatch(setActive(pagination))
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(PaginationLinkList);
