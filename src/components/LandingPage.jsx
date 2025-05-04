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
                style={{
                    background:
                        "url(https://static.wixstatic.com/media/677348_36fd92f155594a1ca1e5a120950259e0f000.jpg/v1/fill/w_1190,h_646,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/677348_36fd92f155594a1ca1e5a120950259e0f000.jpg) no-repeat center",
                    height: "100vh",
                    backgroundSize: "cover",
                }}
                className="d-flex"
            >
                <Container fluid className="d-flex justify-content-center align-items-center">
                    <Row className="text-center">
                        <Col md="12" className="mb-4">
                            <Button tag="a" href="tel:1-301-529-9351" color="success">Book Now</Button>
                            {/* <Button color="success">Book Now</Button> */}
                        </Col>
                        <Col md="12">
                            <Button tag="a" href="tel:1-301-529-9351" color="primary">We offer gift card</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <img
                className="d-block w-100"
                style={{ objectFit: "cover" }}
                // src={image0}
                src="https://static.wixstatic.com/media/677348_36fd92f155594a1ca1e5a120950259e0f000.jpg/v1/fill/w_1190,h_646,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/677348_36fd92f155594a1ca1e5a120950259e0f000.jpg"
            /> */}
            <AboutUs />
            <Services />
            <Gallery />
            <ContactUs />
            <Footer />
        </>
    );
};

export default LandingPage;
