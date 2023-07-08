import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";

import "./style.css";
import logo from "./test.png";

const WaterStation = () => {
    return (
        <Container fluid className="wrapper-containerbox">
            <Container className="water-station-containerbox shadow">
                <div className="water-station-infobox">
                    <Row>
                        <Col xl={2} xs={12}>
                            <img alt="Water Station Logo" src={logo} />
                        </Col>

                        <Col xl={10} xs={12}>
                            <h3>Test</h3>

                            <hr />

                            <p>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>

                            <Link to={`/rate/${1}`}>Write a review</Link>
                        </Col>
                    </Row>
                </div>

                <div className="products-reviews-containerbox">
                    <Tabs
                        defaultActiveKey="products"
                        justify
                    >
                        <Tab className="products-reviews-tab" eventKey="products" title="Products">
                            <Row className="water-station-products-list gy-5 gx-5">
                                <Col xl={3} md={6} xs={12}>
                                    <Card className="shadow-sm">
                                        <Card.Img src={logo} />

                                        <Card.Body>
                                            <h3>Test</h3>

                                            <div className="price-cart-box">
                                                <span>4.55 JOD</span>
                                                <Link to={`/water-stations/${1}`} className="bi bi-cart-plus-fill add-to-cart-btn"></Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                
                            </Row>
                        </Tab>

                        <Tab className="products-reviews-tab" eventKey="reviews" title="Reviews">
                            Test2
                        </Tab>
                    </Tabs>
                </div>
            </Container> 
        </Container>
    );
};

export default WaterStation;