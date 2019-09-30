import React from 'react';

import './pagination-link-item.styles.scss';

const PaginationLinkItem = ({handleClick, children, active}) => (
    <span onClick={handleClick} className={`${active ? "active" : ""} pagination-item`} >{children}</span>
)

export default PaginationLinkItem;
