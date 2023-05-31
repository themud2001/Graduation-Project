import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignInMutation } from "../../store";

import "./style.css";

const SignIn = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [signIn, { isSuccess, isLoading, isError, error }] = useSignInMutation();

    const handleFormOnSubmit = formData => {
        signIn(formData);
        reset();
    };

    return (
        <Container fluid className="signin-containerbox">
            <div className="cardbox shadow-sm">
                <div>
                    <h2>Sign In</h2>
                </div>

                <Form className="formbox" onSubmit={handleSubmit(handleFormOnSubmit)}>
                    <div className="form-fields">
                        <Form.Group controlId="email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                type="text"
                                autoComplete="none"
                                placeholder="E-mail"
                                isInvalid={errors.email}
                                {...register("email", {
                                    required: true,
                                    pattern: {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                                    }
                                })}
                            />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                autoComplete="none"
                                placeholder="Password"
                                isInvalid={errors.password}
                                {...register("password", { required: true })}
                            />
                        </Form.Group>

                        <Form.Group controlId="remember_me">
                            <Form.Check
                                type="checkbox"
                                label="Remember Me?"
                                {...register("remember_me")}
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