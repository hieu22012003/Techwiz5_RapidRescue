import React from "react";

export default function ForgotPassword() {
    return (
        <div>
            <section aria-label="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h3>Forgot your password? Retrieve it now.</h3>
                            <p>
                                Welcome to Rentaly. We're excited to have you on
                                our service, you'll have access to a range of
                                benefits and convenient features that enhance
                                your car rental experience.
                            </p>
                            <div className="spacer-10" />
                            <form
                                name="contactForm"
                                id="contact_form"
                                className="form-border"
                                method="post"
                                action="#"
                            >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="field-set">
                                            <label>Email:</label>
                                            <input
                                                type="text"
                                                name="email"
                                                id="email"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div id="submit" className="pull-left">
                                            <input
                                                type="submit"
                                                id="send_message"
                                                name="nutguiyeucau"
                                                defaultValue="Send"
                                                className="btn-main color-2"
                                            />
                                        </div>
                                        <div
                                            id="mail_success"
                                            className="success"
                                        >
                                            Your message has been sent
                                            successfully.
                                        </div>
                                        <div id="mail_fail" className="error">
                                            Sorry, error occured this time
                                            sending your message.
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
