import React from 'react';
import './Navbar.css';
import './navcss.css';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar variant="dark" className="color-nav" >
            <Navbar.Brand href="#home">REDMODO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Products">Teacher</Nav.Link>
                    <Nav.Link href="/About">Pro</Nav.Link>
                    <Nav.Link href="/Contact">Student</Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);