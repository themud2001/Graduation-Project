import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import "./style.css";

const ReviewsList = () => {
    return (
        <div className="reviews-list-container">
            <Card className="shadow-sm">
                <Row className="review-box">
                    <Col xs={12}>
                        <Card.Body>
                            <h3>Test</h3>

                            <hr />

                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                            <Row className="footer">
                                <Col xs={12} className="info">
                                    <div><i className="bi bi-star-fill" /> 4/5</div>
                                    <div><i className="bi bi-calendar-week-fill" /> 1/1/1991</div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>

            <Card className="shadow-sm">
                <Row className="review-box">
                    <Col xs={12}>
                        <Card.Body>
                            <h3>Test</h3>

                            <hr />

                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                            <Row className="footer">
                                <Col xs={12} className="info">
                                    <div><i className="bi bi-star-fill" /> 4/5</div>
                                    <div><i className="bi bi-calendar-week-fill" /> 1/1/1991</div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>

            <Card className="shadow-sm">
                <Row className="review-box">
                    <Col xs={12}>
                        <Card.Body>
                            <h3>Test</h3>

                            <hr />

                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                            <Row className="footer">
                                <Col xs={12} className="info">
                                    <div><i className="bi bi-star-fill" /> 4/5</div>
                                    <div><i className="bi bi-calendar-week-fill" /> 1/1/1991</div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default ReviewsList;