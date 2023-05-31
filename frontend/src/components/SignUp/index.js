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
            <div className="cardbox shadow-sm">
                <div>
                    <h2>Sign Up</h2>
                </div>

                <Form className="formbox" onSubmit={handleSubmit(handleFormOnSubmit)}>
                    <div className="form-fields">
                        <Form.Group controlId="first_name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                autoComplete="none"
                                placeholder="First Name"
                                isInvalid={errors.first_name}
                                {...register("first_name", { required: true })}
                            />
                        </Form.Group>

                        <Form.Group controlId="last_name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                autoComplete="none"
                                placeholder="Last Name"
                                isInvalid={errors.last_name}
                                {...register("last_name", { required: true })}
                            />
                        </Form.Group>

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

                        <Form.Group controlId="confirm_password">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                autoComplete="none"
                                placeholder="Confirm Password"
                                isInvalid={errors.confirm_password}
                                {...register("confirm_password", { required: true })}
                            />
                        </Form.Group>
                        
                        <Button type="submit">Sign In</Button>
                    </div>

                    <div className="links">
                        <p>Already have an account? <Link to="/signin">Sign in</Link>.</p>
                    </div>
                </Form>
            </div>
        </Container>
    )
};

export default SignUp;