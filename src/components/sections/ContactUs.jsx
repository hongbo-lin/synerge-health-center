import { Col, Container, Row } from "reactstrap";

import SectionHeader from "./SectionHeader";

const ContactUs = () => {
    return (
        <Container id="contact">
            <SectionHeader name="Contact Us" />
            <Row>
                <Col md="6">
                    {/* <div style={{ width: "100%" }}>
                        <iframe
                            width="100%"
                            height="600"
                            // frameBorder="0"
                            // scrolling="no"
                            // marginHeight="0"
                            // marginWidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=7101%20Democracy%20Blvd%20Bethesda,%20MD%2020817+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        >
                            <a href="https://www.gps.ie/">gps tracker sport</a>
                        </iframe>
                    </div> */}
                    
                    {/* <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe
                                class="gmap_iframe"
                                width="100%"
                                frameborder="0"
                                // scrolling="no"
                                marginheight="0"
                                marginwidth="0"
                                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=7101 Democracy Blvd Montgomery Mall Bethesda, MD 20817&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            ></iframe>
                            <a href="https://embed-googlemap.com">embed-googlemap.com</a>
                        </div>
                    </div> */}
                </Col>
                <Col md="6">
                    {/* <Table borderless>
                        <tbody>
                            <tr>
                                <td>Mon</td>
                                <td>11:00 AM - 8:00 PM</td>
                            </tr>
                            <tr>
                                <td>Tue</td>
                                <td>11:00 AM - 8:00 PM</td>
                            </tr>
                            <tr>
                                <td>Wed</td>
                                <td>11:00 AM - 8:00 PM</td>
                            </tr>
                            <tr>
                                <td>Thu</td>
                                <td>11:00 AM - 8:00 PM</td>
                            </tr>
                            <tr>
                                <td>Fri</td>
                                <td>10:00 AM - 8:00 PM</td>
                            </tr>
                            <tr>
                                <td>Sat</td>
                                <td>10:00 AM - 8:00 PM</td>
                            </tr>
                            <tr>
                                <td>Sun</td>
                                <td>11:00 AM - 7:00 PM</td>
                            </tr>
                        </tbody>
                    </Table> */}
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;
