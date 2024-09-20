import React from "react";
import BackgroundFile from "../Pages/images/background/1.jpg";
import MyProfileContent from "../Components/MyProfileContent";
function MyProfile() {
    // Style object for the background section
    const backgroundStyle = {
        height: "50vh", // 50% of the viewport height
        backgroundImage: `url(${BackgroundFile})`, // Correctly assign the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div>
            <section
                id="subheader"
                className="jarallax text-light"
                style={backgroundStyle}
            >
                <div className="center-y relative text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1>My Profile</h1>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="section-settings" className="bg-gray-100">
                <div className="container">
                    <div className="row">
                        <MyProfileContent />

                        <div className="col-lg-9">
                            <div className="card padding40 rounded-5">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <form
                                            id="form-create-item"
                                            className="form-border"
                                            method="post"
                                        >
                                            <div className="de_tab tab_simple">
                                                <ul className="de_nav">
                                                    <li className="active">
                                                        <span>Profile</span>
                                                    </li>
                                                </ul>

                                                <div className="de_tab_content">
                                                    <div className="tab-1">
                                                        <div className="row">
                                                            <div className="col-lg-6 mb20">
                                                                <h5>
                                                                    Username
                                                                </h5>
                                                                <input
                                                                    type="text"
                                                                    name="username"
                                                                    id="username"
                                                                    className="form-control"
                                                                    placeholder="Enter username"
                                                                />
                                                            </div>

                                                            <div className="col-lg-6 mb20">
                                                                <h5>
                                                                    New Password
                                                                </h5>
                                                                <input
                                                                    type="password"
                                                                    name="user_password"
                                                                    id="user_password"
                                                                    className="form-control"
                                                                    placeholder="********"
                                                                />
                                                            </div>
                                                            <div className="col-lg-6 mb20">
                                                                <h5>
                                                                    Re-enter
                                                                    Password
                                                                </h5>
                                                                <input
                                                                    type="password"
                                                                    name="user_password_re-enter"
                                                                    id="user_password_re-enter"
                                                                    className="form-control"
                                                                    placeholder="********"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <input
                                                type="button"
                                                id="submit"
                                                className="btn-main"
                                                value="Update profile"
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MyProfile;
