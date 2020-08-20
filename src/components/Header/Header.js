import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Header = ({ handleRefresh }) => (
    <Navbar 
        bg="dark" 
        variant="dark" 
        className="mb-4 d-flex justify-content-between"
    >
        <Navbar.Brand 
            href="#home"
        >
            <img
                alt="gratitude logo"
                src="http://www.clker.com/cliparts/c/1/3/c/13601006691734787338gratitude-th.png"
                width="30"
                height="30"
                className="d-inline-block align-top rounded-circle mr-2"
            />{' '}
                Gratefulness Journal
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