import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logoWhite from "./logo_white.png";

import "./style.css";

const Footer = () => {
    return (
        <Navbar className="bg-primary">
            <Container className="footer">
                <Row className="gridbox">
                    <Col md={4} sm={12}>
                        <Navbar.Brand className="logo">
                            <img
                                src={logoWhite}
                                height="50"
                                width="50"
                                alt="Logo"
                            />

                            <h5>Water Delivery</h5>
                        </Navbar.Brand>
                    </Col>

                    <Col md={4} sm={12}>
                        <div className="copyright">
                            <p>Copyright &copy; {new Date().getFullYear()} Water Delivery. All rights reserved.</p>
                            <p>Jordan, Amman, Al-Madina Street</p>
                        </div>
                    </Col>

                    <Col md={4} sm={12} className="social-links">
                        <Nav.Link href="https://facebook.com" target="_blank" active={false}>
                            <i className="bi bi-facebook" />
                        </Nav.Link>
                    
                        <Nav.Link href="https://twitter.com" target="_blank" active={false}>
                            <i className="bi bi-twitter" />
                        </Nav.Link>
                    
                        <Nav.Link href="https://www.instagram.com" target="_blank" active={false}>
                            <i className="bi bi-instagram" />
                        </Nav.Link>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default Footer;