import React from "react";
import Select from "react-select";
import DoctorProfiles from "../Components/DoctorProfiles";
import OurFeatures from "../Components/OurFeatures";
import Slider1 from "../Pages/images/slider/1.jpg";
import Car1 from "../Pages/images/car.png";
import Car2 from "../Pages/images/car.png";

const carOptions = [
    { value: "car1", label: "Car 1", image: Car1 },
    { value: "car2", label: "Car 2", image: Car2 },
];

const customSingleValue = ({ data }) => (
    <div className="custom-single-value">
        <img
            src={data.image}
            alt={data.label}
            style={{ width: 50, height: 50, borderRadius: 5 }}
        />
        <span style={{ marginLeft: 10 }}>{data.label}</span>
    </div>
);

const customOption = (props) => {
    const { data, innerRef, innerProps } = props;
    return (
        <div ref={innerRef} {...innerProps} className="custom-option">
            <img
                src={data.image}
                alt={data.label}
                style={{ width: 50, height: 50, borderRadius: 5 }}
            />
            <span style={{ marginLeft: 10 }}>{data.label}</span>
        </div>
    );
};

export default function Home() {
    const formContainerStyle = {
        position: "relative",
        background: `url(${Slider1}) no-repeat center center/cover`,
        width: "100%",
        padding: "150px 100px",
    };

    const overlayStyle = {
        background: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
        padding: "50px",
        marginTop: "50px",
        borderRadius: "8px",
        color: "white", // Ensure text color is white
    };

    const buttonStyle = {
        backgroundColor: "#f8cfcf", // Light pink color
        border: "none",
        color: "#000", // Text color for button
    };

    return (
        <div>
            <div className="no-bottom no-top" id="content">
                <div id="top" />
                <section
                    id="section-hero"
                    aria-label="section"
                    className="no-top"
                    data-bgcolor="#121212"
                >
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 mt-80 sm-mt-0">
                                <div className="spacer-single sm-hide" />
                                <div style={formContainerStyle}>
                                    <div style={overlayStyle}>
                                        <form
                                            name="contactForm"
                                            id="booking_form"
                                            className="form-s2 row g-4 on-submit-hide"
                                            method="post"
                                            action="#"
                                        >
                                            <div className="col-lg-6 d-light">
                                                <div className="row g-4">
                                                    <div className="col-lg-6">
                                                        <h5
                                                            style={{
                                                                color: "white",
                                                            }}
                                                        >
                                                            Pick Up Location
                                                        </h5>
                                                        <select
                                                            name="Pick Up Location"
                                                            id="pick_up_location"
                                                            className="form-control opt-1-disable"
                                                            required=""
                                                        >
                                                            <option value="New York">
                                                                Enter your
                                                                pickup location
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <h5
                                                            style={{
                                                                color: "white",
                                                            }}
                                                        >
                                                            Drop Off Location
                                                        </h5>
                                                        <select
                                                            name="Drop Off Location"
                                                            id="drop_off_location"
                                                            className="form-control opt-1-disable"
                                                            required=""
                                                        >
                                                            <option value="New York">
                                                                Enter your Drop
                                                                Off Location
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <h5
                                                            style={{
                                                                color: "white",
                                                            }}
                                                        >
                                                            Pick Up Date & Time
                                                        </h5>
                                                        <div className="date-time-field">
                                                            <input
                                                                type="text"
                                                                id="date-picker"
                                                                name="Pick Up Date"
                                                                defaultValue=""
                                                            />
                                                            <select
                                                                name="Pick Up Time"
                                                                id="pickup-time"
                                                            >
                                                                <option value="00:00">
                                                                    00:00
                                                                </option>
                                                                <option value="00:30">
                                                                    00:30
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <input
                                                    type="submit"
                                                    id="send_message"
                                                    defaultValue="Submit"
                                                    className="btn-main btn-fullwidth"
                                                    style={buttonStyle} // Apply button style
                                                />
                                            </div>
                                            <div className="col-lg-4">
                                                <div
                                                    className="g-recaptcha"
                                                    data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"
                                                />
                                            </div>
                                        </form>
                                        <div
                                            id="success_message"
                                            className="success s2"
                                        >
                                            <div className="row">
                                                <div className="col-lg-8 offset-lg-2 text-light text-center">
                                                    <h3 className="mb-2">
                                                        Congratulations! Your
                                                        booking has been sent
                                                        successfully. We will
                                                        contact you shortly.
                                                    </h3>
                                                    Refresh this page if you
                                                    want to book again.
                                                    <div className="spacer-20" />
                                                    <a
                                                        className="btn-main btn-black"
                                                        href="booking.html"
                                                    >
                                                        Reload this page
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="error_message"
                                            className="error"
                                        >
                                            Sorry there was an error sending
                                            your form.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="spacer-double" />
                    </div>
                </section>
            </div>
            <DoctorProfiles />
            <OurFeatures />
        </div>
    );
}
