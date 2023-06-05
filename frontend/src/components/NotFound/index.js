import React from "react";
import Container from "react-bootstrap/Container";

import "./style.css";

const NotFound = () => {
    return (
        <Container fluid className="errorbox">
            <div className="first-half">
                <h1 className="text-primary">404 Not Found</h1>
            </div>
            
            <div className="second-half">
                <h1>We couldn't find that page!</h1>
                <p>This is not the page you are looking for. The link you followed is probably broken or the page has been removed.</p>
            </div>
        </Container>
    );
};

export default NotFound;