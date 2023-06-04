import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./style.css";
import logo from "./logo.png";

const Header = () => {
    return (
        <Navbar expand="lg" className="fixed-top headerbox">
            <Container className="header">
                <Navbar.Brand className="logo">
                    <Link to="/">
                        <img
                            src={logo}
                            height="60"
                            alt="Logo"
                        />
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse>
                    <Nav className="navlinks">
                        <HashLink smooth to="/#home" active="false">Home</HashLink>
                        <HashLink smooth to="/#about" active="false">About</HashLink>
                        <HashLink smooth to="/#contact" active="false">Contact</HashLink>
                    </Nav>

                    <Nav className="account">
                        <Link to="/signin" className="btn btn-link sign-in">Sign In</Link>
                        <Link to="/signup" className="btn btn-primary rounded-pill">Sign Up</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;