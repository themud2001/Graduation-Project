import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "./style.css";

const SignUp = () => {
    return (
        <Container fluid className="signup-containerbox">
            <div className="cardbox shadow-sm">
                <div>
                    <h2>Sign Up</h2>
                </div>

                <Form className="formbox">
                    <div className="form-fields">
                        <Form.Group controlId="first_name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                name="first_name"
                                type="text"
                                autoComplete="none"
                                placeholder="First Name"
                            />
                        </Form.Group>

                        <Form.Group controlId="last_name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                name="last_name"
                                type="text"
                                autoComplete="none"
                                placeholder="Last Name"
                            />
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                name="email"
                                type="text"
                                autoComplete="none"
                                placeholder="E-mail"
                            />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                autoComplete="none"
                                placeholder="Password"
                            />
                        </Form.Group>

                        <Form.Group controlId="confirm_password">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                name="confirm_password"
                                type="password"
                                autoComplete="none"
                                placeholder="Confirm Password"
                            />
                        </Form.Group>

                        <Form.Group controlId="remember_me">
                            <Form.Check
                                name="remember_me"
                                type="checkbox"
                                label="Remember Me?"
                            />
                        </Form.Group>
                        
                        <Button type="submit">Sign In</Button>
                    </div>

                    <div className="links">
                        <p>Already have an account? <Link to="/signin">Sign in here</Link>.</p>
                    </div>
                </Form>
            </div>
        </Container>
    )
};

export default SignUp;