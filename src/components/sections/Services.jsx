import { Button, Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardText, CardTitle, Col, Container, Row } from "reactstrap";

import SectionHeader from "./SectionHeader";

import acupressure from "../../assets/images/acupressure.jpg";
import deepTissue from "../../assets/images/deep-tissue.jpg";
import sports from "../../assets/images/sports.jpeg";
import heated from "../../assets/images/heated.webp";
import foot from "../../assets/images/foot.jpeg";
import combo from "../../assets/images/combo.webp";
import reflex from "../../assets/images/reflex.webp";
import slide2 from "../../assets/images/slide2.webp";

const FlipCard = (props) => {
    const { name, src, text } = props;
    return (
        <Col md="6" lg="4" className="mb-4">
            <div className="flip">
                <Card>
                    <div className="face front">
                        {/* <CardTitle>Acupressure</CardTitle> */}
                        <CardHeader>
                            <CardTitle>{name}</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardImg src={src} />
                        </CardBody>
                        {/* <CardImg src={src} />
                        <CardImgOverlay>
                            <CardTitle>{name}</CardTitle>
                        </CardImgOverlay> */}
                    </div>
                    <div className="face back">
                        <CardTitle tag="h3">{name}</CardTitle>
                        <CardText>{text}</CardText>
                        <Button tag="a" href="tel:1-301-529-9351" color="success">Book Now</Button>
                    </div>
                </Card>
            </div>
        </Col>
    );
};

const Services = () => {
    return (
        <Container id="services">
            <SectionHeader name="Services" />
            <Row>
                <FlipCard
                    name="Acupressure"
                    src={acupressure}
                    text="Acupressure massage is a traditional healing practice rooted in Chinese medicine that involves applying pressure to specific points on the body to stimulate energy flow and promote holistic wellness."
                />
                <FlipCard
                    name="Deep Tissue"
                    src={deepTissue}
                    text="Deep tissue massage is a therapeutic massage technique that focuses on the deeper layers of muscle and connective tissue, using firm pressure and slow strokes to release tension and tightness."
                />
                <FlipCard
                    name="Sports Massage"
                    src={sports}
                    text="Sports massage is a specialized form of massage therapy that focuses on enhancing athletic performance, aiding recovery from physical activity, and preventing injuries."
                />
                <FlipCard
                    name="Heated Thermotherapy"
                    src={heated}
                    text="Heated thermotherapy, or heat therapy, involves applying heat to an area of the body for therapeutic purposes, such as pain relief and muscle relaxation."
                />
                <FlipCard
                    name="Foot Massage"
                    src={foot}
                    text="A foot massage is a type of massage therapy that focuses on the feet, often used for relaxation, stress relief, and pain management. It can involve various techniques like squeezing, rubbing, and applying pressure to different areas of the foot, including specific reflex points. "
                />
            </Row>
        </Container>
    );
};

export default Services;
