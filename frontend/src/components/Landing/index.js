import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./style.css";

import stepOneImage from "./step1.png";
import stepTwoImage from "./step2.png";
import stepThreeImage from "./step3.png";
import phoneImage from "./phone.png";
import emailImage from "./email.png";
import addressImage from "./address.png";

import Footer from "../Footer";

const Landing = () => {
    return (
        <>
            <div className="wrapper">
                <Container id="home" className="main">
                    <div className="left">
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button>Order Now</Button>
                    </div>

                    <div className="right"></div>
                </Container>

                <Container id="about" className="about">
                    <Container className="text">
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Container>

                    <Container>
                        <Row className="images">
                            <Col className="step1">
                                <img src={stepOneImage} alt="Step" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales pellentesque tristique. Morbi ullamcorper sodales leo.</p>
                            </Col>
                            
                            <Col className="step2">
                                <img src={stepTwoImage} alt="Step" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales pellentesque tristique. Morbi ullamcorper sodales leo.</p>
                            </Col>

                            <Col className="step3">
                                <img src={stepThreeImage} alt="Step" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales pellentesque tristique. Morbi ullamcorper sodales leo.</p>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                <Container id="contact" className="contact">
                    <Container className="text">
                        <h1>Contact Us</h1>
                        <p>Contact our team by using the following methods:</p>
                    </Container>

                    <Container>
                        <Row className="methods">
                            <Col md={4} xs={12} className="phone">
                                <img src={phoneImage} height="100" width="100" alt="Phone" />

                                <div className="information">
                                    <h4>By Phone</h4>
                                    <p>+962 1 2345 6789</p>
                                </div>
                            </Col>

                            <Col md={4} xs={12} className="email">
                                <img src={emailImage} height="100" width="100" alt="E-mail" />

                                <div className="information">
                                    <h4>By E-mail</h4>
                                    <p>test@gmail.com</p>
                                </div>
                            </Col>

                            <Col md={4} xs={12} className="address">
                                <img src={addressImage} height="100" width="100" alt="Address" />

                                <div className="information">
                                    <h4>By Address</h4>
                                    <p>Jordan, Amman, Al-Madina Street</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>

            <Footer />
        </>
    );
};

export default Landing;