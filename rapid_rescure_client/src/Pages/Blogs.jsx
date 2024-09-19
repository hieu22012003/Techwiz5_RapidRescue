import React from "react";
import team1 from "../Pages/images/team/1.jpg";
import team2 from "../Pages/images/team/2.jpg";
import team3 from "../Pages/images/team/3.jpg";
import team4 from "../Pages/images/team/4.jpg";
import blogs from "../Pages/images/blogs.jpg";

const Blogs = () => {
    // Inline styles object for the background image
    const subheaderStyle = {
        height: "80vh", // 50% of the viewport height
        backgroundImage: `url(${blogs})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className="no-bottom no-top zebra" id="content">
            <div id="top"></div>

            {/* Section Begin */}
            <section
                id="subheader"
                style={subheaderStyle}
                className="jarallax text-light"
            >
                <div className="center-y relative text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1>Blogs</h1>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </section>

            <section aria-label="section" className="jarallax text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2
                                style={{
                                    color: "black",
                                }}
                            >
                                Board of Directors
                            </h2>
                            <div className="spacer-20"></div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mb30">
                            <div className="f-profile text-center">
                                <div className="fp-wrap f-invert">
                                    <div className="fpw-overlay">
                                        <div className="fpwo-wrap">
                                            <div className="fpwow-icons">
                                                <a href="#">
                                                    <i className="fa fa-facebook fa-lg"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-twitter fa-lg"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-linkedin fa-lg"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-pinterest fa-lg"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fpw-overlay-btm"></div>
                                    <img
                                        src={team1}
                                        className="fp-image img-fluid"
                                        alt="Fynley Wilkinson"
                                    />
                                </div>
                                <h4 style={{ color: "black" }}>
                                    Fynley Wilkinson
                                </h4>
                                <p style={{ color: "black" }}>
                                    Chief Creative Officer
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mb30">
                            <div className="f-profile text-center">
                                <div className="fp-wrap f-invert">
                                    <div className="fpw-overlay">
                                        <div className="fpwo-wrap">
                                            <div className="fpwow-icons">
                                                <a href="#">
                                                    <i className="fa fa-facebook fa-lg"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-twitter fa-lg"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-linkedin fa-lg"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-pinterest fa-lg"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fpw-overlay-btm"></div>
                                    <img
                                        src={team2}
                                        className="fp-image img-fluid"
                                        alt="Peter Welsh"
                                    />
                                </div>
                                <h4 style={{ color: "black" }}>Peter Welsh</h4>
                                <p style={{ color: "black" }}>
                                    Chief Technology Officer
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mb30">
                            <div className="f-profile text-center">
                                <div className="fp-wrap f-invert">
                                    <div className="fpw-overlay">
                                        <div className="fpwo-wrap">
                                            <div className="fpwow-icons">
                                                <a href="#">
                                                    <i className="fa fa-facebook fa-lg"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-twitter fa-lg"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-linkedin fa-lg"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-pinterest fa-lg"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fpw-overlay-btm"></div>
                                    <img
                                        src={team3}
                                        className="fp-image img-fluid"
                                        alt="John Shepard"
                                    />
                                </div>
                                <h4 style={{ color: "black" }}>John Shepard</h4>
                                <p style={{ color: "black" }}>
                                    Chief Executive Officer
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 mb30">
                            <div className="f-profile text-center">
                                <div className="fp-wrap f-invert">
                                    <div className="fpw-overlay">
                                        <div className="fpwo-wrap">
                                            <div className="fpwow-icons">
                                                <a href="#">
                                                    <i className="fa fa-facebook fa-lg"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-twitter fa-lg"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-linkedin fa-lg"></i>
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-pinterest fa-lg"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fpw-overlay-btm"></div>
                                    <img
                                        src={team4}
                                        className="fp-image img-fluid"
                                        alt="Robyn Peel"
                                    />
                                </div>
                                <h4 style={{ color: "black" }}>Robyn Peel</h4>
                                <p style={{ color: "black" }}>
                                    Director of Finance
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="section-img-with-tab">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 offset-lg-7">
                            <h2>Only Quality For Clients</h2>
                            <div className="spacer-20"></div>

                            <ul
                                className="nav nav-pills mb-3"
                                id="pills-tab"
                                role="tablist"
                            >
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-home"
                                        aria-selected="true"
                                    >
                                        Luxury
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-profile"
                                        aria-selected="false"
                                    >
                                        Comfort
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-contact-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-contact"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-contact"
                                        aria-selected="false"
                                    >
                                        Prestige
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-home"
                                    role="tabpanel"
                                    aria-labelledby="pills-home-tab"
                                >
                                    <p
                                        style={{
                                            color: "black",
                                        }}
                                    >
                                        We offer a meticulously curated
                                        collection of the most sought-after
                                        luxury vehicles on the market. Whether
                                        you prefer the sporty allure of a
                                        high-performance sports car, the
                                        sophistication of a sleek and luxurious
                                        sedan, or the versatility of a premium
                                        SUV, we have the perfect car to match
                                        your discerning taste.
                                    </p>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-profile"
                                    role="tabpanel"
                                    aria-labelledby="pills-profile-tab"
                                >
                                    <p>
                                        We prioritize your comfort and
                                        convenience throughout your journey. We
                                        understand that a comfortable ride can
                                        make a world of difference, whether
                                        you're embarking on a business trip or
                                        enjoying a leisurely vacation. That's
                                        why we offer a wide range of
                                        well-maintained, comfortable cars that
                                        cater to your specific needs.
                                    </p>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-contact"
                                    role="tabpanel"
                                    aria-labelledby="pills-contact-tab"
                                >
                                    <p>
                                        We understand that prestige goes beyond
                                        luxury. It's about making a statement,
                                        embracing sophistication, and indulging
                                        in the finer things in life. That's why
                                        we offer an exclusive selection of
                                        prestigious cars that exude elegance,
                                        style, and status.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="section-call-to-action"
                className="bg-color-2 pt60 pb60 text-light"
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h2 className="s2">
                                Call us for further information. Rentaly
                                customer care is here to help you anytime.
                            </h2>
                        </div>

                        <div className="col-lg-4 text-lg-center text-sm-center">
                            <div className="phone-num-big">
                                <i className="fa fa-phone"></i>
                                <span className="pnb-text">Call Us Now</span>
                                <span className="pnb-num">1 200 333 800</span>
                            </div>
                            <a href="#" className="btn-main">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
