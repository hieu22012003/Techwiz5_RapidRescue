import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo1 from "../Pages/images/logo-light.png";
import "./css/navbar.css";
const Navbar = () => {
  const location = useLocation();

  return (
    <header
      className="transparent has-topbar"
      style={{ backgroundColor: "#fff" }} // Set navbar background color to white
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
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
              </div>
              <div
                className="de-flex-col header-col-mid"
                style={{ color: "#000" }} // Set text color to black
              >
                <ul
                  id="mainmenu"
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    fontSize: "20px", // Increase font size for menu items
                  }}>
                  <li>
                    <Link
                      className={`menu-item ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                      to="/"
                      style={{ color: "#000" }} // Black text for menu items
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`menu-item ${
                        location.pathname === "/service" ? "active" : ""
                      }`}
                      to="Service"
                      style={{ color: "#000" }} // Black text for menu items
                    >
                      Service
                    </Link>
                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        fontSize: "18px", // Set font size for submenu items
                      }}>
                      <li>
                        <Link
                          className="menu-item"
                          to="Booking"
                          style={{ color: "#000" }} // Black text for submenu items
                        >
                          Booking
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="menu-item"
                          to="Booking"
                          style={{ color: "#000" }} // Black text for submenu items
                        >
                          Booking
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      className={`menu-item ${
                        location.pathname === "/Blogs" ? "active" : ""
                      }`}
                      to="Blogs"
                      style={{ color: "#000" }} // Black text for menu items
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`menu-item ${
                        location.pathname === "/Contact" ? "active" : ""
                      }`}
                      to="Contact"
                      style={{ color: "#000" }} // Black text for menu items
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="de-flex-col">
                <div className="menu_side_area">
                  <Link
                    to="login"
                    className="btn-main"
                    style={{
                      backgroundColor: "#e57373", // Light pink button background
                      color: "#fff", // White text for the button
                      padding: "10px 20px",
                      borderRadius: "5px",
                      fontSize: "18px", // Larger font size for the button
                    }}>
                    Sign In
                  </Link>
                  <span id="menu-btn"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
