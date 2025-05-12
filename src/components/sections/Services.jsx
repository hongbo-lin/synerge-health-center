import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Container,
    List,
    Row,
} from "reactstrap";

import SectionHeader from "./SectionHeader";

import acupressure from "../../assets/images/acupressure-1.jpg";
import deepTissue from "../../assets/images/deep-tissue.jpg";
import sports from "../../assets/images/sports.jpeg";
import heated from "../../assets/images/heated.webp";
import foot from "../../assets/images/foot-2.jpg";
import specialEvent from "../../assets/images/special-event.jpg";

const FlipCard = (props) => {
    const { name, src, text, list, listSummary = "Some key benefits include:" } = props;
    return (
        <Col md="6" lg="4" className="mb-4">
            <div className="flip">
                <Card>
                    <div className="face front">
                        <CardHeader className="text-mutex">
                            <CardTitle>{name}</CardTitle>
                        </CardHeader>
                        <CardBody className="text-muted">
                            {src && <CardImg src={src} />}
                            <CardText>{text}</CardText>
                        </CardBody>
                    </div>
                    <div className="face back">
                        <CardBody>
                            <CardTitle tag="h3">{name}</CardTitle>
                            <CardText className="text-start">{listSummary}</CardText>
                            <List className="text-start">
                                {list?.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </List>
                            <Button tag="a" href="tel:1-301-529-9351" color="success">
                                Book Now
                            </Button>
                        </CardBody>
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
                    list={[
                        "Relieve pain, especially neck and back pain, headaches",
                        "Reduce stress and anxiety by stimulating the release of endorphins",
                        "Improve sleep quality by reducing stress and promoting relaxation",
                    ]}
                />
                <FlipCard
                    name="Deep Tissue"
                    src={deepTissue}
                    text="Deep tissue massage is a therapeutic massage technique that focuses on the deeper layers of muscle and connective tissue, using firm pressure and slow strokes to release tension and tightness."
                    list={[
                        "Helps reduce long-term pain, especially in the back, neck, shoulders, and legs",
                        "Improves flexibility and range of motion by loosening adhesions",
                        "Releases muscle tightness that contributes to misalignment or limited motion",
                    ]}
                />
                <FlipCard
                    name="Sports Massage"
                    src={sports}
                    text="Sports massage is a specialized form of massage therapy that focuses on enhancing athletic performance, aiding recovery from physical activity, and preventing injuries."
                    list={[
                        "Enhances athletic performance by increases flexibility and muscle efficiency before events",
                        "Reduces soreness and improves circulation",
                        "Identifies and addresses tight muscles or imbalances early to prevent injury",
                        "Releases tension and adhesions that limit movement",
                    ]}
                />
                <FlipCard
                    name="Foot Reflexology"
                    src={foot}
                    text="A foot reflexology is a type of massage therapy that focuses on the feet, often used for relaxation, stress relief, and pain management. It can involve various techniques like squeezing, rubbing, and applying pressure to different areas of the foot, including specific reflex points."
                    list={[
                        "Relieves foot pain, plantar fasciitis, and muscle cramps",
                        "Reduces Stress and Anxiety",
                        "Improves Blood Circulation",
                        "Helps rebalance hormones and promotes a sense of well-being",
                        "Reflexology points stimulate internal organs, supporting immune health",
                    ]}
                />
                <FlipCard
                    name="Heated Thermotherapy"
                    src={heated}
                    text="Heated thermotherapy, or heat therapy, involves applying heat to an area of the body for therapeutic purposes, such as pain relief and muscle relaxation."
                    list={[
                        "Heat relaxes tight muscles and reduces spasms",
                        "Heat causes blood vessels to dilate, increasing blood flow and delivering more oxygen and nutrients to tissues",
                        "Warmth can ease discomfort in joints affected by osteoarthritis or rheumatoid arthritis",
                        "A warm compress, heating pad can promote a deep sense of relaxation",
                    ]}
                />
                <FlipCard
                    name="Special Event"
                    src={specialEvent}
                    text="It's important to make sure your celebration, get-together, or private event is a hoot. Treat your guest to the ultimate gift of soothing relaxation with a private event chair massage"
                    listSummary=""
                    list={[
                        "For your private event, massages can last anywhere from 10 to 30 minutes per person",
                        "Our threapists focus on the neck, back and shoulders, and can also include the arms and hands",
                        "Guests remain fully clothed during the session and sit in one of our professional massage chairs",
                        "Our team is dedicated to help you make your private event ohhmmm-forgettable"
                    ]}
                />
            </Row>
        </Container>
    );
};

export default Services;
