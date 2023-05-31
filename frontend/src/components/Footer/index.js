import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import logoWhite from "./logo_white.png";

import "./style.css";

const Footer = () => {
    return (
        <Navbar className="bg-primary">
            <Container className="footer">
                <Navbar.Brand className="logo">
                    <img
                        src={logoWhite}
                        height="50"
                        width="50"
                        alt="Logo"
                    />

                    <h4>Water Delivery</h4>
                </Navbar.Brand>

                <div className="copyright">
                    <p>Copyright &copy; {new Date().getFullYear()} Water Delivery. All rights reserved.</p>
                    <p>Jordan, Amman, Al-Madina Street</p>
                </div>

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