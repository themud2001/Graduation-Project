import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import ProductsList from "../ProductsList";
import ReviewsList from "../ReviewsList";
import ReviewBox from "../ReviewBox";

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

                            <ReviewBox />
                        </Col>
                    </Row>
                </div>

                <div className="products-reviews-containerbox">
                    <Tabs
                        defaultActiveKey="products"
                        justify
                    >
                        <Tab className="products-reviews-tab" eventKey="products" title="Products">
                            <ProductsList />
                        </Tab>

                        <Tab className="products-reviews-tab reviews-list" eventKey="reviews" title="Reviews">
                            <ReviewsList />
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </Container>
    );
};

export default WaterStation;