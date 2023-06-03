import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignUpMutation } from "../../store";

import "./style.css";

const SignUp = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [signUp, { isSuccess, isLoading, isError, error }] = useSignUpMutation();

    const handleFormOnSubmit = formData => {
        signUp(formData);
        reset();
    };

    return (
        <Container fluid className="signup-containerbox">
            <div className="cardbox shadow">
                <div>
                    <h2>Sign Up</h2>
                </div>

                <Form className="formbox" onSubmit={handleSubmit(handleFormOnSubmit)}>
                    <div className="form-fields">
                        <Form.Group controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                size="sm"
                                autoComplete="none"
                                isInvalid={errors.first_name}
                                {...register("firstName", { required: true })}
                            />
                        </Form.Group>

                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                size="sm"
                                autoComplete="none"
                                isInvalid={errors.last_name}
                                {...register("lastName", { required: true })}
                            />
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                type="text"
                                size="sm"
                                autoComplete="none"
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
                                size="sm"
                                autoComplete="none"
                                isInvalid={errors.password}
                                {...register("password", { required: true })}
                            />
                        </Form.Group>

                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                size="sm"
                                autoComplete="none"
                                isInvalid={errors.confirm_password}
                                {...register("confirmPassword", { required: true })}
                            />
                        </Form.Group>
                        
                        <Button size="sm" type="submit">Sign Up</Button>
                    </div>
                </Form>

                <div className="links">
                    <p>Already have an account? <Link to="/signin">Sign in</Link>.</p>
                </div>
            </div>
        </Container>
    )
};

export default SignUp;