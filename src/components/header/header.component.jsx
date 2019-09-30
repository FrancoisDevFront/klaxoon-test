import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { toggleAdd } from '../../redux/modal/modal.actions.js';

import './header.styles.scss';

const Header = ({ toggleAdd }) => (
    <nav className='header'>
        <Button className="link" onClick={toggleAdd}>Add Links</Button>
    </nav>
);

const mapDispatchToProps = dispatch => ({
    toggleAdd: () => dispatch(toggleAdd()),
});

export default connect(null, mapDispatchToProps)(Header);
