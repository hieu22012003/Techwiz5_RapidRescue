import React, { useState } from "react";
import hospital from "../Pages/images/hospital.jpg";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        username: "",
        phone: "",
        password: "",
        rePassword: ""
    });

    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation example
        if (form.password === form.rePassword && form.name && form.email && form.username && form.phone) {
            setIsSuccess(true);
            setIsError(false);
            // Add your form submission logic here.
        } else {
            setIsError(true);
            setIsSuccess(false);
        }
    };

    // Inline styles
    const subheaderStyle = {
        height: "50vh", // 50% of the viewport height
        backgroundImage: `url(${hospital})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div>
            <div className="no-bottom no-top" id="content">
                <div id="top" />
                {/* section begin */}
                <section id="subheader" style={subheaderStyle} className="jarallax text-light">
                    <div className="center-y relative text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h1>Register</h1>
                                </div>
                                <div className="clearfix" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* section close */}
                <section aria-label="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <h3>Don't have an account? Register now.</h3>
                                <p>
                                    Welcome to Rentaly. We're excited to have you on board. By creating an account with us, you'll gain access to a range of benefits and convenient features that will enhance your car rental experience.
                                </p>
                                <div className="spacer-10" />
                                <form
                                    name="registerForm"
                                    id="register_form"
                                    className="form-border"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="field-set">
                                                <label>Name:</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="form-control"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-set">
                                                <label>Email Address:</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="form-control"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-set">
                                                <label>Choose a Username:</label>
                                                <input
                                                    type="text"
                                                    name="username"
                                                    id="username"
                                                    className="form-control"
                                                    value={form.username}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-set">
                                                <label>Phone:</label>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id="phone"
                                                    className="form-control"
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-set">
                                                <label>Password:</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    className="form-control"
                                                    value={form.password}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="field-set">
                                                <label>Re-enter Password:</label>
                                                <input
                                                    type="password"
                                                    name="rePassword"
                                                    id="rePassword"
                                                    className="form-control"
                                                    value={form.rePassword}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div id="submit" className="pull-left">
                                                <input
                                                    type="submit"
                                                    id="send_message"
                                                    value="Register Now"
                                                    className="btn-main color-2"
                                                />
                                            </div>
                                            {isSuccess && (
                                                <div className="success">
                                                    Your registration was successful.
                                                </div>
                                            )}
                                            {isError && (
                                                <div className="error">
                                                    Please fill out all fields correctly.
                                                </div>
                                            )}
                                            <div className="clearfix" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Register;
