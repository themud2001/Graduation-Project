import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./style.css";

const ReviewBox = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button
                variant="link"
                className="write-review-link"
                onClick={() => setShow(true)}
            >Write a review</Button>

            <Modal show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title><i className="bi bi-star-fill modal-title-icon" /> Write a Review</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form className="rating-description-box">
                        <Form.Group>
                            <Form.Label>Rating:</Form.Label>
                            <Form.Select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Description:</Form.Label>
                            <Form.Control
                                as="textarea"
                                size="sm"
                                rows={5}
                                autoComplete="none"
                                placeholder="(Optional)"
                            />
                        </Form.Group>

                        <Button type="submit" size="sm">Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ReviewBox;