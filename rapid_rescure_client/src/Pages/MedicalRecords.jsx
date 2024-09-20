import React, { useState } from "react";
import MyProfileContent from "../Components/MyProfileContent";
import medicalRecordsImage from "../Pages/images/background/2.jpg"; // Correct image path
import imgNodata from "../Pages/images/null-data.webp";
import "./css/page/Home.css";

function MedicalRecordsPage() {
    // Custom style for background image
    const subheaderStyle = {
        height: "50vh",
        backgroundImage: `url(${medicalRecordsImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    // State to toggle the form display
    const [showForm, setShowForm] = useState(false);

    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: "",
        dateOfBirth: "",
        medicalHistory: "",
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            {/* Subheader with background image */}
            <section
                id="subheader"
                style={subheaderStyle}
                className="jarallax text-light"
            >
                <div className="center-y relative text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1>Medical Records</h1>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main section with profile and orders */}
            <section id="section-cars" className="bg-gray-100">
                <div className="container">
                    <div className="row">
                        {/* Profile section */}
                        <MyProfileContent />

                        {/* Orders section */}
                        <div className="col-lg-9">
                            <div className="row">
                                {/* Order summary cards */}
                                {/* ... (The rest of the cards remain unchanged) */}
                            </div>

                            {/* Recent Orders Table or Form */}
                            <div className="card padding30 rounded-5 mb25">
                                {!showForm ? (
                                    <>
                                        <h4
                                            style={{
                                                textAlign: "left",
                                                paddingLeft: "5%",
                                                fontSize: "20px",
                                            }}
                                        >
                                            Danh sách hồ sơ bệnh nhân
                                        </h4>
                                        <p
                                            style={{
                                                textAlign: "center",
                                                paddingLeft: "10%",
                                                fontSize: "20px",
                                                fontWeight: "bold",
                                                color: "#CCCCCC",
                                                padding: "20px",
                                            }}
                                        >
                                            Bạn chưa có hồ sơ bệnh nhân. Vui
                                            lòng tạo mới hồ sơ để được đặt khám.
                                        </p>
                                        <div
                                            className="no_data"
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <img
                                                style={{
                                                    width: "300px",
                                                    height: "300px",
                                                    padding: "50px",
                                                }}
                                                src={imgNodata}
                                                alt=""
                                            />
                                        </div>
                                        <button
                                            onClick={() => setShowForm(true)} // Show form when clicked
                                            style={{
                                                marginTop: "20px",
                                                padding: "10px 20px",
                                                fontSize: "16px",
                                                backgroundColor: "#ff1493", // Button color
                                                color: "#fff",
                                                border: "none",
                                                borderRadius: "5px",
                                                fontWeight: "bold",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Tạo Hồ Sơ Ngay
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <h4
                                            style={{
                                                textAlign: "left",
                                                paddingLeft: "5%",
                                                fontSize: "20px",
                                            }}
                                        >
                                            Tạo Hồ Sơ Bệnh Nhân
                                        </h4>
                                        {/* <form action=""></form> */}

                                        <h2 className="form-title">
                                            {" "}
                                            Fill Out Patient Records
                                        </h2>
                                        <form
                                            action="/submit"
                                            method="POST"
                                            className="form-container"
                                        >
                                            {/* Họ và tên và Số điện thoại (chia 2 cột) */}
                                            <div className="form-row">
                                                <div className="form-col">
                                                    <label
                                                        htmlFor="hoTen"
                                                        className="form-label"
                                                    >
                                                        Name*
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="hoTen"
                                                        name="hoTen"
                                                        className="form-input"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="form-col">
                                                    <label
                                                        htmlFor="soDienThoai"
                                                        className="form-label"
                                                    >
                                                        Phone *
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="soDienThoai"
                                                        name="soDienThoai"
                                                        className="form-input"
                                                        pattern="[0-9]{10}"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                            {/* Ngày sinh và Giới tính (chia 2 cột) */}
                                            <div className="form-row">
                                                <div className="form-col">
                                                    <label
                                                        htmlFor="ngaySinh"
                                                        className="form-label"
                                                    >
                                                        Date*
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id="ngaySinh"
                                                        name="ngaySinh"
                                                        className="form-input"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="form-col">
                                                    <label
                                                        htmlFor="gioiTinh"
                                                        className="form-label"
                                                    >
                                                        Gender *
                                                    </label>
                                                    <select
                                                        id="gioiTinh"
                                                        name="gioiTinh"
                                                        className="form-input"
                                                        required=""
                                                    >
                                                        <option value="">
                                                            Choose Gender ...
                                                        </option>
                                                        <option value="Nam">
                                                            Male
                                                        </option>
                                                        <option value="Nữ">
                                                            Female
                                                        </option>
                                                        <option value="Khác">
                                                            Option
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/* Nghề nghiệp và Số CCCD/Passport (chia 2 cột) */}
                                            <div className="form-row">
                                                <div className="form-col">
                                                    <label
                                                        htmlFor="ngheNghiep"
                                                        className="form-label"
                                                    >
                                                        Job*
                                                    </label>
                                                    <select
                                                        id="ngheNghiep"
                                                        name="ngheNghiep"
                                                        className="form-input"
                                                        required=""
                                                    >
                                                        <option value="">
                                                            Choose Job
                                                        </option>
                                                        <option value="Sinh viên">
                                                            Student
                                                        </option>
                                                        <option value="Nhân viên văn phòng">
                                                            Office Staff
                                                        </option>
                                                        <option value="Kinh doanh">
                                                            Bussiness
                                                        </option>
                                                        <option value="Khác">
                                                            Option
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="form-col">
                                                    <label
                                                        htmlFor="cccd"
                                                        className="form-label"
                                                    >
                                                        CCCD/Passport
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="cccd"
                                                        name="cccd"
                                                        className="form-input"
                                                    />
                                                </div>
                                            </div>
                                            {/* Địa chỉ Email và Dân tộc (chia 2 cột) */}
                                            <div className="form-row">
                                                <div className="form-col">
                                                    <label
                                                        htmlFor="email"
                                                        className="form-label"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        className="form-input"
                                                    />
                                                </div>
                                                <div className="form-col">
                                                    <label
                                                        htmlFor="danToc"
                                                        className="form-label"
                                                    >
                                                        Ethnic
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="danToc"
                                                        name="danToc"
                                                        className="form-input"
                                                    />
                                                </div>
                                            </div>
                                            {/* Tỉnh / Thành và Quận / Huyện (chia 2 cột) */}
                                            <div className="form-row">
                                                <div className="form-col">
                                                    <label
                                                        htmlFor="tinhThanh"
                                                        className="form-label"
                                                    >
                                                        City *
                                                    </label>
                                                    <select
                                                        id="tinhThanh"
                                                        name="tinhThanh"
                                                        className="form-input"
                                                        required=""
                                                    >
                                                        <option value="">
                                                            Choose City
                                                        </option>
                                                        <option value=""></option>
                                                        <option value="">
                                                            {" "}
                                                        </option>
                                                        <option value=""></option>
                                                    </select>
                                                </div>
                                                <div className="form-col">
                                                    <label
                                                        htmlFor="quanHuyen"
                                                        className="form-label"
                                                    >
                                                        District *
                                                    </label>
                                                    <select
                                                        id="quanHuyen"
                                                        name="quanHuyen"
                                                        className="form-input"
                                                        required=""
                                                    >
                                                        <option value="">
                                                            Choose District
                                                        </option>
                                                        <option value=""></option>
                                                        <option value="">
                                                            {" "}
                                                        </option>
                                                        <option value=""></option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/* Phường / Xã và Địa chỉ hiện tại (chia 2 cột) */}
                                            <div className="form-row">
                                                <div className="form-col">
                                                    <label
                                                        htmlFor="phuongXa"
                                                        className="form-label"
                                                    >
                                                        Ward / Commune *
                                                    </label>
                                                    <select
                                                        id="phuongXa"
                                                        name="phuongXa"
                                                        className="form-input"
                                                        required=""
                                                    >
                                                        <option value="">
                                                            Choose Ward /
                                                            Commune
                                                        </option>
                                                        <option value=""></option>
                                                        <option value="">
                                                            {" "}
                                                        </option>
                                                        <option value=""></option>
                                                    </select>
                                                </div>
                                                <div className="form-col">
                                                    <label
                                                        htmlFor="diaChiHienTai"
                                                        className="form-label"
                                                    >
                                                        Current address *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="diaChiHienTai"
                                                        name="diaChiHienTai"
                                                        className="form-input"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                            {/* Submit button */}
                                            <button
                                                type="submit"
                                                className="form-button"
                                            >
                                                Send
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MedicalRecordsPage;
