import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="text-light">
            <div className="container">
                <div className="row g-custom-x">
                    <div className="col-lg-3">
                        <div className="widget">
                            <h5>About Rentaly</h5>
                            <p>
                                Where quality meets affordability. We understand
                                the importance of a smooth and enjoyable journey
                                without the burden of excessive costs. That's
                                why we have meticulously crafted our offerings
                                to provide you with top-notch vehicles at
                                minimum expense.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="widget">
                            <h5>Contact Info</h5>
                            <address className="s1">
                                <span>
                                    <i
                                        className="id-color fa fa-map-marker fa-lg"
                                        style={{ color: "#e57373" }} // Light pink color
                                    ></i>
                                    08 W 36th St, New York, NY 10001
                                </span>
                                <span>
                                    <i
                                        className="id-color fa fa-phone fa-lg"
                                        style={{ color: "#e57373" }} // Light pink color
                                    ></i>
                                    +1 333 9296
                                </span>
                                <span>
                                    <i
                                        className="id-color fa fa-envelope-o fa-lg"
                                        style={{ color: "#e57373" }} // Light pink color
                                    ></i>
                                    <a href="mailto:contact@example.com">
                                        contact@example.com
                                    </a>
                                </span>
                                <span>
                                    <i
                                        className="id-color fa fa-file-pdf-o fa-lg"
                                        style={{ color: "#e57373" }} // Light pink color
                                    ></i>
                                    <a href="#">Download Brochure</a>
                                </span>
                            </address>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <h5>Quick Links</h5>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="widget">
                                    <ul>
                                        <li>
                                            <Link to="#">About</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Careers</Link>
                                        </li>
                                        <li>
                                            <Link to="#">News</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Partners</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="widget">
                            <h5>Social Network</h5>
                            <div className="social-icons">
                                <a href="#">
                                    <i
                                        className="fa fa-facebook fa-lg"
                                        style={{ color: "#e57373" }} // Light pink color
                                    ></i>
                                </a>
                                <a href="#">
                                    <i
                                        className="fa fa-twitter fa-lg"
                                        style={{ color: "#e57373" }} // Light pink color
                                    ></i>
                                </a>
                                <a href="#">
                                    <i
                                        className="fa fa-linkedin fa-lg"
                                        style={{ color: "#e57373" }} // Light pink color
                                    ></i>
                                </a>
                                <a href="#">
                                    <i
                                        className="fa fa-pinterest fa-lg"
                                        style={{ color: "#e57373" }} // Light pink color
                                    ></i>
                                </a>
                                <a href="#">
                                    <i
                                        className="fa fa-rss fa-lg"
                                        style={{ color: "#e57373" }} // Light pink color
                                    ></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="de-flex">
                                <div className="de-flex-col">
                                    <Link to="index.html">
                                        Copyright 2024 - Rentaly by Designesia
                                    </Link>
                                </div>
                                <ul className="menu-simple">
                                    <li>
                                        <Link to="#">
                                            Terms &amp; Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
