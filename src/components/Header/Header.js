import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Header = ({ handleRefresh }) => (
    <Navbar 
        bg="dark" 
        variant="dark" 
        className="d-flex justify-content-between"
        id="top"
    >
        <Navbar.Brand 
            href="/"
            className="d-flex align-items-center"
        >
            <img
                alt="gratitude logo"
                src="http://www.clker.com/cliparts/c/1/3/c/13601006691734787338gratitude-th.png"
                width="30"
                height="30"
                className="d-inline-block align-top rounded-circle mr-2"
            />
            <h1 className="ml-2">Grateful Thoughts Word Cloud</h1>
        </Navbar.Brand>
        <Button 
            variant="success"
            onClick={ () => handleRefresh() }
        >
            Refresh
        </Button>
    </Navbar>
)

export default Header;