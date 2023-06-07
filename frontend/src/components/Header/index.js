import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { signOut } from "../../store";

import "./style.css";
import logo from "./logo.png";

const Header = () => {
    const { firstName, lastName } = useSelector(state => state.auth);
    const dispatch = useDispatch();

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
                        {firstName && lastName ? (
                            <>
                                <NavDropdown className="options" title={`${firstName} ${lastName}`}>
                                    <Link className="dropdown-item" to="/profile">
                                        <i className="bi bi-person" /> My Profile
                                    </Link>
                                    <Link className="dropdown-item" to="/orders">
                                        <i className="bi bi-clock" /> My Orders
                                    </Link>

                                    <NavDropdown.Divider />

                                    <Link className="dropdown-item" onClick={() => dispatch(signOut())}>
                                        <i className="bi bi-box-arrow-right" /> Sign Out
                                    </Link>
                                </NavDropdown>
                            </>
                        ) : (
                            <>
                                <Link to="/signin" className="btn btn-link sign-in">Sign In</Link>
                                <Link to="/signup" className="btn btn-primary rounded-pill">Sign Up</Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;