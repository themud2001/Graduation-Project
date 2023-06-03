import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { useSignInMutation } from "../../store";

import "./style.css";

const SignIn = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [signIn, { isSuccess, isLoading, isError, error }] = useSignInMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            toast.success("Successfully signed in!");
            reset();
            navigate("/");
        }

        if (isError) {
            toast.error(...error.data.errorMessage);
        }
    }, [isSuccess, isLoading, isError, error]);

    const handleFormOnSubmit = formData => {
        signIn(formData);
    };

    return (
        <Container fluid className="signin-containerbox">
            <div className="cardbox shadow">
                <div>
                    <h2>Sign In</h2>
                </div>

                <Form className="formbox" onSubmit={handleSubmit(handleFormOnSubmit)}>
                    <div className="form-fields">
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

                        <Form.Group controlId="rememberMe">
                            <Form.Check
                                type="checkbox"
                                label="Remember Me?"
                                {...register("rememberMe")}
                            />
                        </Form.Group>
                        
                        <Button disabled={isLoading} size="sm" type="submit">Sign In</Button>
                    </div>
                </Form>

                <div className="links">
                    <p>Don't have an account? <Link to="/signup">Create one</Link>.</p>
                </div>
            </div>
        </Container>
    )
};

export default SignIn;