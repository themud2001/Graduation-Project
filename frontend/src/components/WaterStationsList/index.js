import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "./style.css";
import logo from "./test.png";

const WaterStationsList = () => {
    return (
        <Container fluid className="wrapper-containerbox">
            <Container className="water-stations-containerbox shadow">
                <Row className="searchbox">
                    <Col lg={8} xs={12}>
                        <h4>All Water Stations</h4>
                    </Col>

                    <Col lg={4} xs={12}>
                        <Form>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    size="sm"
                                />

                                <Button type="submit" size="sm"><i className="bi bi-search" /></Button>
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>

                <div className="water-stations-listbox">
                    <Card className="shadow-sm">
                        <Row>
                            <Col lg={2} xs={12}>
                                <Card.Img src={logo} />
                            </Col>

                            <Col lg={10} xs={12}>
                                <Card.Body>
                                    <h3>Test</h3>

                                    <hr />

                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>

                                    <Row className="footer">
                                        <Col lg={10} xs={12} className="info">
                                            <div><i className="bi bi-star-fill" /> 4/5</div>
                                            <div><i className="bi bi-wechat" /> 123 reviews</div>
                                        </Col>

                                        <Col lg={2} xs={12} className="viewbox">
                                            <Link to={`/water-stations/${1}`} className="btn btn-primary btn-sm rounded-pill view-button">View Products</Link>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </Container> 
        </Container>
    );
};

export default WaterStationsList;