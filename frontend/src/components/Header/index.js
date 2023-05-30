import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./style.css";
import logo from "./logo.png";

const Header = () => {
    return (
        <Navbar className="header-navbar" expand="md">
            <Container className="header-container">
                <Navbar.Brand className="logo">
                    <img
                        src={logo}
                        height="50"
                        width="50"
                        alt="Logo"
                        className="d-inline-block"
                    />
                </Navbar.Brand>

                <Nav className="header-navlinks">
                    <Nav.Link href="#home" active={false}>Home</Nav.Link>
                    <Nav.Link href="#about" active={false}>About</Nav.Link>
                    <Nav.Link href="#contact" active={false}>Contact</Nav.Link>
                </Nav>

                <Nav className="header-account">
                    <Nav.Link>Sign In</Nav.Link>
                    <Button>Sign Up</Button>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;