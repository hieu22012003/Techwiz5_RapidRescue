import React, { useState } from "react";
import Bg2Image from "../Pages/images/background/2.jpg";
import SvgGG from "../Pages/images/svg/google_icon.svg";
import SvgFB from "../Pages/images/svg/facebook_icon.svg";

const Login = () => {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", name);
    };

    return (
        <div className="no-bottom no-top" id="content">
            <div id="top"></div>
            <section
                id="section-hero"
                aria-label="section"
                className="jarallax"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh", // Full viewport height
                    backgroundImage: `url(${Bg2Image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-4">
                            <div
                                className="padding40 rounded-3 shadow-soft"
                                style={{
                                    backgroundColor: "#ffffff",
                                    padding: "40px",
                                    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                                }}
                            >
                                <h4>Login</h4>
                                <div className="spacer-10"></div>
                                <form
                                    id="form_register"
                                    className="form-border"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="field-set">
                                        <input
                                            type="text"
                                            name="name1"
                                            id="name1"
                                            className="form-control"
                                            placeholder="Your Name"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="field-set">
                                        <input
                                            type="text"
                                            name="name2"
                                            id="name2"
                                            className="form-control"
                                            placeholder="Your Name"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div id="submit">
                                        <input
                                            type="submit"
                                            id="send_message"
                                            value="Sign In"
                                            className="btn-main btn-fullwidth rounded-3"
                                        />
                                    </div>
                                </form>
                                <div
                                    className="title-line"
                                    style={{
                                        textAlign: "center",
                                        display: "block",
                                    }}
                                >
                                    Or sign up with
                                </div>
                                <div className="row g-2">
                                    <div className="col-lg-6">
                                        <a
                                            className="btn-sc btn-fullwidth mb10"
                                            href="#"
                                        >
                                            <img src={SvgGG} alt="Google" />{" "}
                                            Google
                                        </a>
                                    </div>
                                    <div className="col-lg-6">
                                        <a
                                            className="btn-sc btn-fullwidth mb10"
                                            href="#"
                                        >
                                            <img src={SvgFB} alt="Facebook" />{" "}
                                            Facebook
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
