import React, { useState } from "react";
import BookingEmergency from "../Components/BookingEmergency";
// import BookingNoEmergency from "../Components/BookingNoEmergency";
import OurFeatures from "../Components/OurFeatures";
import { default as Car1, default as Car2 } from "../Pages/images/car.png";
import Slider1 from "../Pages/images/slider/1.jpg";
import xecuuthuong from "./assets/img/xecuuthuong.jpeg";
import ambulanceSvg from "./assets/svg/ambulance-svgrepo-com.svg";
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
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
    });
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
                {/* <BookingNoEmergency /> */}
                <BookingEmergency />
            </div>
            <OurFeatures />

            <section className="ambulance-introduce">
                <div className="container">
                    <div className="row row1">
                        <div className="col-lg-5">
                            <img
                                src={xecuuthuong}
                                className="w-100 imgXecuuthuong"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-7">
                            <h4 className="title">
                                With fast and convenient ambulance booking
                                service!
                            </h4>
                            <p className="content">
                                Aliquam egestas dolor at ullamcorper accumsan
                                refreshing. Neque porro est qui dolorem ipsum
                                quia quaed inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo.
                                Aelltes port lacus quis enim var sed efficitur
                                turpis gilla sed sit amet finibus eros. Lorem
                                Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the
                                ndustry standard dummy text ever since the
                                1500s.
                                <br />
                                Aliquam egestas dolor at ullamcorper accumsan
                                refreshing. Neque porro est qui dolorem ipsum
                                quia quaed inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo.
                                Aelltes port lacus quis enim var sed efficitur
                                turpis gilla sed sit amet finibus eros..
                            </p>
                        </div>
                    </div>
                    <div className="top-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-5">
                                    <span className="title">
                                        Established in
                                    </span>
                                    <div className="content">
                                        <img
                                            src={ambulanceSvg}
                                            className="logoContent"
                                            alt=""
                                        />{" "}
                                        <span className="text">2024</span>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <button
                                        type="button"
                                        className="btn-main btn-book-now"
                                        style={{ backgroundColor: "#ee296a" }}
                                    >
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
