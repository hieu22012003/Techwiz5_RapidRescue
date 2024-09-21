import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import svgGG from "../Pages/assets/svg/google.svg";
import Logo1 from "../Pages/images/logo-light.png";
import AvatarData from "../Pages/images/people/1.jpg";
import "./css/navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({});
  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleClickLogin = () => {
    const popup = window.open(
      "http://localhost:8080/user",
      "_blank",
      "width=500,height=600"
    );

    window.addEventListener("message", async (event) => {
      if (event.origin !== "http://localhost:8080") {
        return;
      }

      // Nhận dữ liệu từ backend
      const userData = event.data;

      // Đóng popup
      if (popup) {
        popup.close();
      }

      let roleName = "customer"; // default role
      try {
        const res = await axios.get(
          `http://localhost:8080/role/${userData.email}`
        );
        roleName = res.data;
      } catch (err) {
        console.error("Err to fetch role: ", err.message);
      }

      const expiryTime = 2 * 60 * 60 * 1000; // 2 tiếng

      // Lưu vào local storage
      const expiryDate = new Date().getTime() + expiryTime;
      const userDataWithExpiry = {
        ...userData,
        expiry: expiryDate,
        roleName: roleName,
      };
      console.log("userdata: ", userDataWithExpiry);
      localStorage.setItem("userData", JSON.stringify(userDataWithExpiry));
      if (roleName === "admin") {
        console.log("Admin");
      } else if (roleName === "emt") {
        console.log("emt");
      } else if (roleName === "driver") {
        console.log("driver");
      } else {
        setUserData(userData);
        setProfileMenuOpen(false);
        setIsLogin(true);
      }
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setIsLogin(false);
    setUserData(null);
    setProfileMenuOpen(false);
    console.log("Đã đăng xuất.");
  };

  useEffect(() => {
    const checkUserStatus = () => {
      const storedData = localStorage.getItem("userData");
      if (storedData) {
        const userData = JSON.parse(storedData);
        const currentTime = new Date().getTime();
        if (currentTime > userData.expiry) {
          handleLogout();
          setUserData(null);
          console.log("Phiên đăng nhập đã hết hạn.");
        } else {
          if (userData.roleName === "admin") {
            console.log("Admin");
          } else if (userData.roleName === "emt") {
            console.log("emt");
          } else if (userData.roleName === "driver") {
            console.log("driver");
          } else {
            setUserData(userData);
            setIsLogin(true);
          }
          console.log("Người dùng vẫn đăng nhập.");
        }
      }
    };

    const interval = setInterval(checkUserStatus, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className="transparent has-topbar"
      style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div id="logo">
                  <Link to="/">
                    <img
                      className="logo-1"
                      src={Logo1}
                      alt="Logo"
                      style={{
                        width: "120px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                </div>
              </div>
              <div
                className="de-flex-col header-col-mid"
                style={{ color: "#000" }}>
                <ul
                  id="mainmenu"
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    fontSize: "20px",
                  }}>
                  <li>
                    <Link
                      className={`menu-item ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                      to="/"
                      style={{ color: "#000" }}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`menu-item ${
                        location.pathname === "/blogs" ? "active" : ""
                      }`}
                      to="/blogs"
                      style={{ color: "#000" }}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`menu-item ${
                        location.pathname === "/contact" ? "active" : ""
                      }`}
                      to="/contact"
                      style={{ color: "#000" }}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="de-flex-col">
                {isLogin ? (
                  <div className="menu_side_area">
                    <span
                      id="de-click-menu-profile"
                      className="de-menu-profile"
                      onClick={toggleProfileMenu}>
                      <img
                        src={AvatarData}
                        className="img-fluid"
                        alt="Profile"
                      />
                    </span>
                    {isProfileMenuOpen && (
                      <div
                        id="de-submenu-profile"
                        style={{
                          position: "absolute",
                          right: "7.5%",
                          top: "98%",
                          backgroundColor: "#fff",
                          borderRadius: "6px",
                          padding: "20px",
                          margin: "0",
                          boxShadow: "0 0 6px rgba(0, 0, 0, 0.5)",
                        }}>
                        <div className="d-name">
                          <h4>{userData.userName}</h4>
                          <span className="text-gray">{userData.email}</span>
                        </div>
                        <div className="d-line"></div>
                        <ul className="menu-col">
                          <li>
                            <Link to="/MedicalRecords">
                              <i
                                style={{ color: "#e57373" }}
                                className="fa fa-home"></i>
                              Medical Records
                            </Link>
                          </li>
                          <li>
                            <Link to="/MyProfile">
                              <i
                                style={{ color: "#e57373" }}
                                className="fa fa-user"></i>
                              My Profile
                            </Link>
                          </li>
                          <li>
                            <Link to="/MyOrders">
                              <i
                                style={{ color: "#e57373" }}
                                className="fa fa-calendar"></i>
                              My Order
                            </Link>
                          </li>
                          <li>
                            <Link onClick={handleLogout}>
                              <i
                                style={{ color: "#e57373" }}
                                className="fa fa-sign-out"></i>
                              Sign Out
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                    <span id="menu-btn"></span>
                  </div>
                ) : (
                  <button className="btn btn-google" onClick={handleClickLogin}>
                    <img src={svgGG} alt="" /> <span>Login with Google</span>{" "}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
