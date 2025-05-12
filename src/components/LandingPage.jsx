import { Button, ButtonGroup, Col, Container, Row } from "reactstrap";

import Footer from "./Footer";
import TopNav from "./TopNav";

import AboutUs from "./sections/AboutUs";
import ContactUs from "./sections/ContactUs";
import Gallery from "./sections/Gallery";
import Services from "./sections/Services";

const LandingPage = () => {
    return (
        <>
            <TopNav />
            <div
                id="top-navbar"
                className="d-flex"
            >
                <Container fluid className="d-flex justify-content-center align-items-center">
                    <Row className="text-center">
                        <Col md="12" className="mb-4">
                            <Button tag="a" href="tel:1-301-529-9351" color="success">
                                <i className="fas fa-phone" />{" "}
                                Book Now
                            </Button>
                        </Col>
                        <Col md="12">
                            <Button style={{ maxWidth: "200px" }} tag="a" href="tel:1-301-529-9351" color="primary">We offer gift card and membership packages</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <AboutUs />
            <Services />
            <Gallery />
            <ContactUs />
            <Footer />
        </>
    );
};

export default LandingPage;
