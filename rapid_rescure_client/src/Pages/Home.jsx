import React, { useState } from "react";
import OurFeatures from "../Components/OurFeatures";
import { default as Car1, default as Car2 } from "../Pages/images/car.png";
import Slider1 from "../Pages/images/slider/1.jpg";
import xecuuthuong from "./assets/img/xecuuthuong.jpeg";
import ambulanceCircle from "./assets/img/xecuuthuongVuong.png";
import ambulanceSvg from "./assets/svg/ambulance-svgrepo-com.svg";
import locationSvg from "./assets/svg/location-svgrepo-com.svg";
import "./css/page/Home.css";
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
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  // Hàm lấy vị trí người dùng
  const getLocation = () => {
    // Kiểm tra xem trình duyệt có hỗ trợ API geolocation không
    if (navigator.geolocation) {
      // Kiểm tra quyền truy cập vị trí
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "granted") {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
          } else if (permissionStatus.state === "prompt") {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
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
    setError(null); // Xóa lỗi (nếu có)
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
  const formContainerStyle = {
    position: "relative",
    background: `url(${Slider1}) no-repeat center center/cover`,
    width: "100%",
    padding: "150px 100px 20px 100px",
  };

  const overlayStyle = {
    // background: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
    padding: "50px",
    marginTop: "50px",
    borderRadius: "8px",
    color: "white", // Ensure text color is white
    width: "70vw",
  };

  const buttonStyle = {
    backgroundColor: "#d94b7b", // Light pink color
    border: "none",
    color: "#fff", // Text color for button
  };

  return (
    <div>
      <div className="no-bottom no-top" id="content">
        <div id="top" />

        <section
          id="section-hero"
          aria-label="section"
          className=""
          style={{ paddingTop: "150px" }}
          data-bgcolor="#121212">
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
                      action="#">
                      <div className="col-lg-8 d-light">
                        <div className="row g-4">
                          <div className="col-lg-6">
                            <h5
                              style={{
                                color: "#222",
                              }}>
                              Pick Up Location
                            </h5>
                            <div className="d-flex w-100">
                              {" "}
                              <input
                                type="text"
                                name="Pick Up Location"
                                id="pick_up_location"
                                className="form-control opt-1-disable "
                                placeholder="Your Pick Up Location"
                                value={
                                  location.latitude !== null &&
                                  location.longitude !== null
                                    ? location.latitude +
                                      "," +
                                      location.longitude
                                    : null
                                }
                              />
                              <button
                                type="button"
                                className="btn-location"
                                onClick={getLocation}>
                                {" "}
                                <img src={locationSvg} alt="" />
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <h5
                              style={{
                                color: "#222",
                              }}>
                              Drop Off Location
                            </h5>
                            <select
                              name="Drop Off Location"
                              id="drop_off_location"
                              className="form-control opt-1-disable"
                              required="">
                              <option value="New York">
                                Enter your Drop Off Location
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 px-3">
                        <div className="row g-4">
                          <div className="px-0 container">
                            <h5
                              style={{
                                color: "#222",
                              }}
                              className="w-100">
                              Nearest car
                            </h5>
                            <div className="row mx-0 nearest_car_content">
                              <div className="col-lg-2">
                                <img
                                  src={ambulanceSvg}
                                  alt=""
                                  className="w-100"
                                  style={{
                                    scale: "1.3",
                                  }}
                                />
                              </div>
                              <div className="col-lg-10">
                                <input
                                  type="text"
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
                                style={buttonStyle} // Apply button style
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div id="success_message" className="success s2">
                      <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-light text-center">
                          <h3 className="mb-2">
                            Congratulations! Your booking has been sent
                            successfully. We will contact you shortly.
                          </h3>
                          Refresh this page if you want to book again.
                          <div className="spacer-20" />
                          <a className="btn-main btn-black" href="booking.html">
                            Reload this page
                          </a>
                        </div>
                      </div>
                    </div>
                    <div id="error_message" className="error">
                      Sorry there was an error sending your form.
                    </div>
                  </div>
                  <div
                    className="under-form container-fluid mt-5"
                    style={{ paddingLeft: "15px" }}>
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
                        <h5 className="title">Choose a vehicle</h5>
                        <p className="content">
                          Unlock unparalleled adventures and memorable journeys
                          with our vast fleet of vehicles tailored to suit every
                          need, taste, and destination.
                        </p>
                      </div>
                      <div className="col-lg-3">
                        <h5 className="title">Pick location & date</h5>
                        <p className="content">
                          Pick your ideal location and date, and let us take you
                          on a journey filled with convenience, flexibility, and
                          unforgettable experiences.
                        </p>
                      </div>
                      <div className="col-lg-3">
                        <h5 className="title">Make a booking</h5>
                        <p className="content">
                          Secure your reservation with ease, unlocking a world
                          of possibilities and embarking on your next adventure
                          with confidence.
                        </p>
                      </div>
                      <div className="col-lg-3">
                        <h5 className="title">Sit back & relax</h5>
                        <p className="content">
                          Hassle-free convenience as we take care of every
                          detail, allowing you to unwind and embrace a journey
                          filled comfort.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="booking-more mt-3">
                    <span className="text-content">
                      {" "}
                      <span style={{ color: "#ee296a" }}>*</span> This is an
                      emergency booking service, if you want to book a car with
                      full information
                    </span>{" "}
                    <button
                      type="button"
                      className="btn-main"
                      style={{ backgroundColor: "#d94b7b" }}>
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
      </div>
      <OurFeatures />

      <section className="ambulance-introduce">
        <div className="container">
          <div className="row row1">
            <div className="col-lg-5">
              <img src={xecuuthuong} className="w-100 imgXecuuthuong" alt="" />
            </div>
            <div className="col-lg-7">
              <h4 className="title">
                With fast and convenient ambulance booking service!
              </h4>
              <p className="content">
                Aliquam egestas dolor at ullamcorper accumsan refreshing. Neque
                porro est qui dolorem ipsum quia quaed inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo. Aelltes port
                lacus quis enim var sed efficitur turpis gilla sed sit amet
                finibus eros. Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the ndustry
                standard dummy text ever since the 1500s.
                <br />
                Aliquam egestas dolor at ullamcorper accumsan refreshing. Neque
                porro est qui dolorem ipsum quia quaed inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo. Aelltes port
                lacus quis enim var sed efficitur turpis gilla sed sit amet
                finibus eros..
              </p>
            </div>
          </div>
          <div className="top-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-5">
                  <span className="title">Established in</span>
                  <div className="content">
                    <img src={ambulanceSvg} className="logoContent" alt="" />{" "}
                    <span className="text">2024</span>
                  </div>
                </div>
                <div className="col-lg-7">
                  <button
                    type="button"
                    className="btn-main btn-book-now"
                    style={{ backgroundColor: "#ee296a" }}>
                    Booking Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <DoctorProfiles /> */}
    </div>
  );
}
