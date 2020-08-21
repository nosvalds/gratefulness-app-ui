import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <Navbar 
        bg="dark" 
        variant="dark" 
        className="d-flex justify-content-between align-items-center"
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
            <p className="ml-2 mb-0">Grateful Thoughts Word Cloud</p>
        </Navbar.Brand>
        <a className="text-decoration-none text-light" href="#top">To the Top</a>
        <div className="d-flex justify-content-end">
            <p className="mb-0 text-light">&#169; 2020</p>
            <a className="text-decoration-none text-light ml-2" href="https://www.nikolaso.com/">Nik Osvalds</a>
            <a className="text-decoration-none text-light mr-2 ml-4" href="https://github.com/nosvalds/gratefulness-app-ui">
                <FontAwesomeIcon icon={ faGithubSquare } className="text-decoration-none text-light"/>
            </a>
        </div>
    </Navbar>
)

export default Footer;