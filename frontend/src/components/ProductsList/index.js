import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import "./style.css";
import logo from "./test.png";

const ProductsList = () => {
    return (
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
    );
};

export default ProductsList;