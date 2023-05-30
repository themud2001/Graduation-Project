import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignIn = () => {
    return (
        <Container className="signin-container">
            <Form>
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
            </Form>
        </Container>
    )
};

export default SignIn;