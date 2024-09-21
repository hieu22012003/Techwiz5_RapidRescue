import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../Pages/images_02/1.jpg";
import Image2 from "../Pages/images_02/2.jpg";
import Image3 from "../Pages/images_02/3.jpg";

const OurFeatures = () => {
    return (
        <div>
            <section className="py-5" style={{ backgroundColor: "#fff" }}>
                {/* Section background */}
                <Container>
                    <Row className="align-items-center">
                        {/* Left side (Title) */}
                        <Col md={4}>
                            <h2
                                style={{
                                    fontSize: "46px",
                                    fontWeight: "bold",
                                    lineHeight: "1.2",
                                }}
                            >
                                Let's We Adventure Begin
                            </h2>
                        </Col>

                        {/* Right side (Services) */}
                        <Col md={8}>
                            <Row>
                                {/* Service 1 */}
                                <Col md={4} className="text-left">
                                    <img
                                        src={Image1}
                                        alt="First Class Services"
                                        className="mb-3"
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                        }} // Adjust size accordingly
                                    />
                                    <h5>First Class Services</h5>
                                    <p>
                                        Where luxury meets exceptional care,
                                        creating unforgettable moments and
                                        exceeding your every expectation.
                                    </p>
                                </Col>

                                {/* Service 2 */}
                                <Col md={4} className="text-left">
                                    <img
                                        src={Image2}
                                        alt="24/7 Road Assistance"
                                        className="mb-3"
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                        }}
                                    />
                                    <h5>24/7 Road Assistance</h5>
                                    <p>
                                        Reliable support when you need it most,
                                        keeping you on the move with confidence
                                        and peace of mind.
                                    </p>
                                </Col>

                                {/* Service 3 */}
                                <Col md={4} className="text-left">
                                    <img
                                        src={Image3}
                                        alt="Free Pick-Up & Drop-Off"
                                        className="mb-3"
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                        }}
                                    />
                                    <h5>Free Pick-Up & Drop-Off</h5>
                                    <p>
                                        Enjoy free pickup and drop-off services,
                                        adding an extra layer of ease to your
                                        car rental experience.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default OurFeatures;
