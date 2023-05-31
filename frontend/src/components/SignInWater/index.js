import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "./style.css";

const SignInWater = () => {
    return (
        <Container fluid className="signin-water-containerbox">
            <div className="cardbox shadow-sm">
                <div>
                    <h2>Sign In (Water Station)</h2>
                </div>

                <Form className="formbox">
                    <div className="form-fields">
                        <Form.Group controlId="water_station">
                            <Form.Label>Water Station Name</Form.Label>
                            <Form.Control
                                name="water_station"
                                type="text"
                                autoComplete="none"
                                placeholder="Water Station Name"
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
                        <p>Regular user? <Link to="/signin">Sign in here</Link>.</p>
                    </div>
                </Form>
            </div>
        </Container>
    )
};

export default SignInWater;