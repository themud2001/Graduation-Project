import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "./style.css";

const SignIn = () => {
    return (
        <Container fluid className="signin-containerbox">
            <div className="cardbox shadow-sm">
                <div>
                    <h2>Sign In</h2>
                </div>

                <Form className="formbox">
                    <div className="form-fields">
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
                        <p>Don't have an account? <Link to="/signup">Create one</Link>.</p>
                        <p>Are you an owner / worker? <Link to="/signin-water">Sign in here</Link>.</p>
                    </div>
                </Form>
            </div>
        </Container>
    )
};

export default SignIn;