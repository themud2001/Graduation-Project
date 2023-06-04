import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { useSignUpMutation } from "../../store";

import "./style.css";

const SignUp = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [signUp, { isSuccess, isLoading, isError, error }] = useSignUpMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            toast.success("Successfully signed up!");
            reset();
            navigate("/signin");
        }

        if (isError) {
            toast.error(...error.data.errorMessage);
        }
    }, [isSuccess, isLoading, isError, error, navigate, reset]);

    const handleFormOnSubmit = formData => {
        signUp(formData);
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
                                isInvalid={errors.firstName}
                                {...register("firstName", { required: true })}
                            />
                        </Form.Group>

                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                size="sm"
                                autoComplete="none"
                                isInvalid={errors.lastName}
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

                        <Form.Group controlId="phoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                size="sm"
                                autoComplete="none"
                                isInvalid={errors.phoneNumber}
                                {...register("phoneNumber", { required: true })}
                            />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                size="sm"
                                autoComplete="none"
                                isInvalid={errors.password}
                                {...register("password", { required: true, minLength: 6 })}
                            />
                        </Form.Group>

                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                size="sm"
                                autoComplete="none"
                                isInvalid={errors.confirmPassword}
                                {...register("confirmPassword", { required: true })}
                            />
                        </Form.Group>
                        
                        <Button disabled={isLoading} size="sm" type="submit">Sign Up</Button>
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