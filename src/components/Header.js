import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

const Header = () => (
    <Navbar bg="dark" variant="dark" className="mb-4">
        <Navbar.Brand href="#home">
        <img
            alt="gratitude logo"
            src="http://www.clker.com/cliparts/c/1/3/c/13601006691734787338gratitude-th.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
        />{' '}
            Gratefulness Journal
        </Navbar.Brand>
    </Navbar>
)

export default Header;