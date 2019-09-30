import React from "react";

import "./list-icon.styles.scss";

const LinkIcon = ({ code, edit, erase, handleClick }) => (
  <td width="10%">
    <button
      className={`${edit ? "listInfo-edit" : ""} ${
        erase ? "listInfo-delete" : ""
      }`}
      onClick={handleClick}
    >
      {code}
    </button>
  </td>
);

export default LinkIcon;
