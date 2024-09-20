import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo1 from "../Pages/images/logo-light.png";
import "./css/navbar.css";
import AvatarData from "../Pages/images/people/1.jpg";

const Navbar = () => {
    const location = useLocation();
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

    const toggleProfileMenu = () => {
        setProfileMenuOpen(!isProfileMenuOpen);
    };

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
                                style={{ color: "#000" }} // Set text color to black
                            >
                                <ul
                                    id="mainmenu"
                                    style={{
                                        listStyleType: "none",
                                        padding: 0,
                                        fontSize: "20px", // Increase font size for menu items
                                    }}
                                >
                                    <li>
                                        <Link
                                            className={`menu-item ${
                                                location.pathname === "/"
                                                    ? "active"
                                                    : ""
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
                                                location.pathname === "/service"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            to="/service"
                                            style={{ color: "#000" }} // Black text for menu items
                                        >
                                            Service
                                        </Link>
                                        <ul
                                            style={{
                                                listStyleType: "none",
                                                padding: 0,
                                                fontSize: "18px", // Set font size for submenu items
                                            }}
                                        >
                                            <li>
                                                <Link
                                                    className="menu-item"
                                                    to="/booking"
                                                    style={{ color: "#000" }} // Black text for submenu items
                                                >
                                                    Booking
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="menu-item"
                                                    to="/booking"
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
                                                location.pathname === "/blogs"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            to="/blogs"
                                            style={{ color: "#000" }} // Black text for menu items
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={`menu-item ${
                                                location.pathname === "/contact"
                                                    ? "active"
                                                    : ""
                                            }`}
                                            to="/contact"
                                            style={{ color: "#000" }} // Black text for menu items
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="de-flex-col">
                                <div className="menu_side_area">
                                    <span
                                        id="de-click-menu-profile"
                                        className="de-menu-profile"
                                        onClick={toggleProfileMenu} // Toggle profile menu on click
                                    >
                                        <img
                                            src={AvatarData}
                                            className="img-fluid"
                                            alt="Profile"
                                        />
                                    </span>
                                    {isProfileMenuOpen && ( // Conditionally render the profile menu
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
                                                boxShadow:
                                                    "0 0 6px rgba(0, 0, 0, 0.5)",
                                            }}
                                            className=""
                                        >
                                            <div className="d-name">
                                                <h4>Monica Lucas</h4>
                                                <span className="text-gray">
                                                    monica@rentaly.com
                                                </span>
                                            </div>
                                            <div className="d-line"></div>
                                            <ul className="menu-col">
                                                <li>
                                                    <Link to="/account-dashboard">
                                                        <i className="fa fa-home"></i>
                                                        Dashboard
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/account-profile">
                                                        <i className="fa fa-user"></i>
                                                        My Profile
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/account-booking">
                                                        <i className="fa fa-calendar"></i>
                                                        My Orders
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/account-favorite">
                                                        <i className="fa fa-car"></i>
                                                        My Favorite Cars
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/login">
                                                        <i className="fa fa-sign-out"></i>
                                                        Sign Out
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
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
