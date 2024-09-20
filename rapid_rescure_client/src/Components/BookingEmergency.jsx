import React, { useState } from "react";
import ambulanceCircle from "../Pages/assets/img/xecuuthuongVuong.png";
import ambulanceSvg from "../Pages/assets/svg/ambulance-svgrepo-com.svg";
import locationSvg from "../Pages/assets/svg/location-svgrepo-com.svg";
import Slider1 from "../Pages/images/slider/1.jpg";

const BookingEmergency = () => {
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
    });
    const [error, setError] = useState(null);
    const [bookingType, setBookingType] = useState("emergency"); // emergency or scheduled
    const [scheduledDate, setScheduledDate] = useState("");
    const [scheduledTime, setScheduledTime] = useState("");

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then((permissionStatus) => {
                    if (permissionStatus.state === "granted") {
                        navigator.geolocation.getCurrentPosition(
                            showPosition,
                            showError
                        );
                    } else if (permissionStatus.state === "prompt") {
                        navigator.geolocation.getCurrentPosition(
                            showPosition,
                            showError
                        );
                    } else if (permissionStatus.state === "denied") {
                        setError(
                            "Quyền truy cập vị trí đã bị từ chối. Vui lòng cấp quyền truy cập."
                        );
                    }
                });
        } else {
            setError("Trình duyệt của bạn không hỗ trợ Geolocation.");
        }
    };

    const showPosition = (position) => {
        setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        });
        setError(null);
    };

    const showError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                setError("Người dùng từ chối yêu cầu lấy vị trí.");
                break;
            case error.POSITION_UNAVAILABLE:
                setError("Thông tin vị trí không có sẵn.");
                break;
            case error.TIMEOUT:
                setError("Yêu cầu lấy vị trí quá thời gian cho phép.");
                break;
            default:
                setError("Đã xảy ra lỗi không xác định.");
        }
    };

    const handleBookingTypeChange = (event) => {
        setBookingType(event.target.value);
    };

    const formContainerStyle = {
        position: "relative",
        background: `url(${Slider1}) no-repeat center center/cover`,
        width: "100%",
        padding: "150px 100px 20px 100px",
    };

    const overlayStyle = {
        padding: "50px",
        borderRadius: "8px",
        color: "white",
        width: "65vw",
    };

    const buttonStyle = {
        backgroundColor: "#d94b7b",
        border: "none",
        color: "#fff",
    };

    return (
        <section
            id="section-hero"
            aria-label="section"
            className=""
            style={{ paddingTop: "150px" }}
            data-bgcolor="#121212"
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 mt-80 sm-mt-0">
                        <div className="spacer-single sm-hide" />
                        <div className="form-booking-emergency">
                            <div style={overlayStyle}>
                                <form
                                    name="contactForm"
                                    id="booking_form"
                                    className="form-s2 row g-4 on-submit-hide"
                                    method="post"
                                    action="#"
                                >
                                    {/* Booking type switcher */}
                                    <div className="col-lg-12">
                                        <h5 style={{ color: "#222" }}>
                                            Choose Booking Type
                                        </h5>
                                        <div>
                                            <label
                                                style={{
                                                    color: "black",
                                                    marginLeft: "20px",
                                                    fontSize: "15px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    value="emergency"
                                                    checked={
                                                        bookingType ===
                                                        "emergency"
                                                    }
                                                    onChange={
                                                        handleBookingTypeChange
                                                    }
                                                />{" "}
                                                Emergency Booking
                                            </label>
                                            <label
                                                style={{
                                                    marginLeft: "20px",
                                                    color: "black",
                                                    fontSize: "15px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    value="scheduled"
                                                    checked={
                                                        bookingType ===
                                                        "scheduled"
                                                    }
                                                    onChange={
                                                        handleBookingTypeChange
                                                    }
                                                />{" "}
                                                Scheduled Booking
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-lg-8">
                                        <div className="row g-4">
                                            <div className="col-lg-6">
                                                <h5 style={{ color: "#222" }}>
                                                    Pick Up Location
                                                </h5>
                                                <div className="d-flex w-100">
                                                    <input
                                                        type="text"
                                                        name="Pick Up Location"
                                                        id="pick_up_location"
                                                        className="form-control opt-1-disable"
                                                        placeholder="Your Pick Up Location"
                                                        value={
                                                            location.latitude !==
                                                                null &&
                                                            location.longitude !==
                                                                null
                                                                ? location.latitude +
                                                                  "," +
                                                                  location.longitude
                                                                : null
                                                        }
                                                    />

                                                    <button
                                                        type="button"
                                                        className="btn-location"
                                                        onClick={getLocation}
                                                    >
                                                        <img
                                                            src={locationSvg}
                                                            alt="location icon"
                                                        />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <h5 style={{ color: "#222" }}>
                                                    Drop Off Location
                                                </h5>
                                                <select
                                                    name="Drop Off Location"
                                                    id="drop_off_location"
                                                    className="form-control opt-1-disable"
                                                    required=""
                                                >
                                                    <option value="New York">
                                                        Enter your Drop Off
                                                        Location
                                                    </option>
                                                </select>
                                            </div>

                                            {bookingType === "scheduled" ? (
                                                <>
                                                    <div className="col-lg-6">
                                                        <h5
                                                            style={{
                                                                color: "#222",
                                                            }}
                                                        >
                                                            Pick a Date
                                                        </h5>
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            value={
                                                                scheduledDate
                                                            }
                                                            onChange={(e) =>
                                                                setScheduledDate(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            required={
                                                                bookingType ===
                                                                "scheduled"
                                                            }
                                                        />
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <h5
                                                            style={{
                                                                color: "#222",
                                                            }}
                                                        >
                                                            Pick a Time
                                                        </h5>
                                                        <input
                                                            type="time"
                                                            className="form-control"
                                                            value={
                                                                scheduledTime
                                                            }
                                                            onChange={(e) =>
                                                                setScheduledTime(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            required={
                                                                bookingType ===
                                                                "scheduled"
                                                            }
                                                        />
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div
                                                        className="col-lg-6"
                                                        style={{
                                                            visibility:
                                                                "hidden",
                                                        }}
                                                    >
                                                        <h5
                                                            style={{
                                                                color: "#222",
                                                            }}
                                                        >
                                                            Pick a Date
                                                        </h5>
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            value={
                                                                scheduledDate
                                                            }
                                                            onChange={(e) =>
                                                                setScheduledDate(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            required={
                                                                bookingType ===
                                                                "scheduled"
                                                            }
                                                        />
                                                    </div>
                                                    <div
                                                        className="col-lg-6"
                                                        style={{
                                                            visibility:
                                                                "hidden",
                                                        }}
                                                    >
                                                        <h5
                                                            style={{
                                                                color: "#222",
                                                            }}
                                                        >
                                                            Pick a Time
                                                        </h5>
                                                        <input
                                                            type="time"
                                                            className="form-control"
                                                            value={
                                                                scheduledTime
                                                            }
                                                            onChange={(e) =>
                                                                setScheduledTime(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            required={
                                                                bookingType ===
                                                                "scheduled"
                                                            }
                                                        />
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-lg-4 px-3">
                                        <div className="row g-4">
                                            {bookingType === "scheduled" ? (
                                                <>
                                                    {" "}
                                                    <div className="px-0 container">
                                                        <h5
                                                            style={{
                                                                color: "#222",
                                                            }}
                                                            className="w-100"
                                                        >
                                                            Nearest car
                                                        </h5>
                                                        <div className="row mx-0 nearest_car_content">
                                                            <div className="col-lg-2">
                                                                <img
                                                                    src={
                                                                        ambulanceSvg
                                                                    }
                                                                    alt="ambulance icon"
                                                                    className="w-100"
                                                                    style={{
                                                                        scale: "1.3",
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="col-lg-10">
                                                                <input
                                                                    type="text"
                                                                    disabled
                                                                    id="nearest_car"
                                                                    name="Nearest Car"
                                                                    defaultValue="ABCD-1234"
                                                                    placeholder="Nearest Car"
                                                                    className="w-100"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row mt-3 mx-0">
                                                            <input
                                                                type="submit"
                                                                id="send_message"
                                                                defaultValue="Booking"
                                                                className="btn-main w-100 mx-auto px-0"
                                                                style={
                                                                    buttonStyle
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    {" "}
                                                    <div className="px-0 container">
                                                        <h5
                                                            style={{
                                                                color: "#222",
                                                            }}
                                                            className="w-100"
                                                        >
                                                            Nearest car
                                                        </h5>
                                                        <div className="row mx-0 nearest_car_content">
                                                            <div className="col-lg-2">
                                                                <img
                                                                    src={
                                                                        ambulanceSvg
                                                                    }
                                                                    alt="ambulance icon"
                                                                    className="w-100"
                                                                    style={{
                                                                        scale: "1.3",
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="col-lg-10">
                                                                <input
                                                                    type="text"
                                                                    disabled
                                                                    id="nearest_car"
                                                                    name="Nearest Car"
                                                                    defaultValue="ABCD-1234"
                                                                    placeholder="Nearest Car"
                                                                    className="w-100"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row mt-3 mx-0">
                                                            <input
                                                                type="submit"
                                                                id="send_message"
                                                                defaultValue="Booking"
                                                                className="btn-main w-100 mx-auto px-0"
                                                                style={
                                                                    buttonStyle
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div
                                className="under-form container-fluid mt-5"
                                style={{ paddingLeft: "15px" }}
                            >
                                <div className="row row-box">
                                    <div className="col-lg-3">
                                        <div className="box"></div>
                                        <hr className="lineBoxx" />
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="box"></div>
                                        <hr className="lineBoxx" />
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="box"></div>
                                        <hr className="lineBoxx" />
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="box"></div>
                                    </div>
                                </div>
                                <div className="row row-content mt-5">
                                    <div className="col-lg-3">
                                        <h5 className="title">
                                            Choose a vehicle
                                        </h5>
                                        <p className="content">
                                            Unlock unparalleled adventures and
                                            memorable journeys with our vast
                                            fleet of vehicles tailored to suit
                                            every need, taste, and destination.
                                        </p>
                                    </div>
                                    <div className="col-lg-3">
                                        <h5 className="title">
                                            Pick location & date
                                        </h5>
                                        <p className="content">
                                            Pick your ideal location and date,
                                            and let us take you on a journey
                                            filled with convenience,
                                            flexibility, and unforgettable
                                            experiences.
                                        </p>
                                    </div>
                                    <div className="col-lg-3">
                                        <h5 className="title">
                                            Make a booking
                                        </h5>
                                        <p className="content">
                                            Secure your reservation with ease,
                                            unlocking a world of possibilities
                                            and embarking on your next adventure
                                            with confidence.
                                        </p>
                                    </div>
                                    <div className="col-lg-3">
                                        <h5 className="title">
                                            Sit back & relax
                                        </h5>
                                        <p className="content">
                                            Hassle-free convenience as we take
                                            care of every detail, allowing you
                                            to unwind and embrace a journey
                                            filled comfort.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="booking-more mt-3">
                                <span className="text-content">
                                    {" "}
                                    <span style={{ color: "#ee296a" }}>
                                        *
                                    </span>{" "}
                                    This is an emergency booking service, if you
                                    want to book a car with full information
                                </span>{" "}
                                <button
                                    type="button"
                                    className="btn-main"
                                    style={{ backgroundColor: "#d94b7b" }}
                                >
                                    MOVE TO PAGE {"->"}
                                </button>
                            </div>
                        </div>

                        <div className="circle-ambulance">
                            <img src={ambulanceCircle} alt="ambulance" />
                        </div>
                    </div>
                </div>
                <div className="spacer-double" />
            </div>
        </section>
    );
};

export default BookingEmergency;
