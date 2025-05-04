import { Col, Container, List, Row, Table } from "reactstrap";

const Footer = () => {
    return (
        <footer className=" bg-black text-white">
            <Container>
                <Row>
                    <Col md="4">
                        <h4 className="pt-5">Synergy Health</h4>
                        <p>
                            Come in and our therapists provide the perfect treatment. Our massage is specially designed
                            to help you achieve the perfect mind-body harmony
                        </p>
                    </Col>
                    <Col md="4">
                        <h4 className="pt-5">Contacts</h4>
                        <List type="unstyled">
                            <li>
                                <i className="fas fa-phone" />
                                <span className="ms-2">(301) 529-9351</span>
                            </li>
                            <li>
                                <i className="fas fa-location-dot" />
                                <a
                                    className="ms-2 text-white text-decoration-none"
                                    href="https://maps.app.goo.gl/i3383s3AgxhEeAGA8"
                                >
                                    7101 Democracy Blvd, Bethesda, MD 20817
                                </a>
                                <div style={{ width: "100%" }}>
                                    <iframe
                                        width="100%"
                                        height="150"
                                        // frameBorder="0"
                                        // scrolling="no"
                                        // marginHeight="0"
                                        // marginWidth="0"
                                        src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=7101%20Democracy%20Blvd%20Bethesda,%20MD%2020817+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    >
                                        <a href="https://www.gps.ie/">gps tracker sport</a>
                                    </iframe>
                                </div>
                            </li>
                        </List>
                    </Col>
                    <Col md="4">
                        <h4 className="pt-5">Open Hours</h4>
                        <Table borderless className="table-dark" size="sm">
                            <tbody>
                                <tr className="table-black">
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
                        </Table>
                    </Col>
                </Row>
            </Container>
            {/* <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            Montgomery Mall
                            <br />
                            7101 Democracy Blvd
                            <br />
                            Bethesda, MD 20817
                        </p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!">
                            <i className="fab fa-fw fa-facebook-f"></i>
                        </a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!">
                            <i className="fab fa-fw fa-twitter"></i>
                        </a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!">
                            <i className="fab fa-fw fa-linkedin-in"></i>
                        </a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!">
                            <i className="fab fa-fw fa-dribbble"></i>
                        </a>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Freelancer</h4>
                        <p className="lead mb-0">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by
                            <a href="http://startbootstrap.com">Start Bootstrap</a>.
                        </p>
                    </div>
                </div>
            </div> */}
        </footer>
    );
};

export default Footer;
