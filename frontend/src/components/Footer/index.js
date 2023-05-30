import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import logo from "./logo.png";

import "./style.css";

const Footer = () => {
    return (
        <Navbar className="bg-primary">
            <Container className="footer">
                <Navbar.Brand className="logo">
                    <img
                        src={logo}
                        height="50"
                        width="50"
                        alt="Logo"
                    />

                    <h4>Water Delivery</h4>
                </Navbar.Brand>

                <Nav className="social-links">
                    <Nav.Link href="https://facebook.com" target="_blank" active={false}>
                        <i className="bi bi-facebook" />
                    </Nav.Link>
                    
                    <Nav.Link href="https://twitter.com" target="_blank" active={false}>
                        <i className="bi bi-twitter" />
                    </Nav.Link>
                    
                    <Nav.Link href="https://www.instagram.com" target="_blank" active={false}>
                        <i className="bi bi-instagram" />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Footer;