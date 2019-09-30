import React from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";

import "./link-item.styles.scss";

import LinkIcon from "../list-icon/list-icon.component.jsx";

import {
  deleteLinkItem,
  setEditLinkId
} from "../../redux/links/links.actions.js";
import { toggleEdit } from "../../redux/modal/modal.actions";

const LinkItem = ({
  title,
  author,
  date,
  url,
  id,
  removeLink,
  toggleEdit,
  setEditLinkId
}) => {

  const handleEdit = id => {
    toggleEdit();
    setEditLinkId(id);
  };

  return (
    <tr className="listItem">
      <td width="30%" className="listItem-title">{title}</td>
      <td width="20%" className="listItem-origins">
        <p>{author}</p>
        <p>{date}</p>
      </td>
      <td width="30%">
      <a className="listItem-url" href={url} target="_blank" rel="noreferrer">
        {url}
      </a>
      </td>
      <LinkIcon edit code="&#9998;" handleClick={() => handleEdit(id)}></LinkIcon>
      <LinkIcon
        erase
        code="&#10007;"
        handleClick={() => removeLink(id)}
      ></LinkIcon>
    </tr>
  );
};

const mapDispatchToProps = dispatch => ({
  removeLink: id => dispatch(deleteLinkItem(id)),
  toggleEdit: () => dispatch(toggleEdit()),
  setEditLinkId: id => dispatch(setEditLinkId(id))
});

export default connect(
  null,
  mapDispatchToProps
)(LinkItem);
