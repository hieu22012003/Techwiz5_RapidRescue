import React from "react";
import Doctor1 from "../Pages/images/docter.jpg";
import Doctor2 from "../Pages/images/docter.jpg";
import Doctor3 from "../Pages/images/docter.jpg";

const DoctorProfiles = () => {
    return (
        <section id="section-doctors">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <h2>Meet Our Doctors</h2>
                        <p>
                            Our team of experienced doctors is dedicated to
                            providing the best care for you. Each member of our
                            team has years of experience in their respective
                            fields, ensuring you are in safe hands.
                        </p>
                        <div className="spacer-20"></div>
                    </div>

                    <div className="col-lg-4 mb10">
                        <div className="doctor-profile s2 item">
                            <div className="post-content">
                                <div className="post-image">
                                    <img
                                        alt="Doctor 1"
                                        src={Doctor1}
                                        className="lazy"
                                    />
                                </div>
                                <div className="post-text">
                                    <h4>
                                        <a href="doctor-single.html">
                                            Dr. John Smith
                                            <span></span>
                                        </a>
                                    </h4>
                                    <p>
                                        With over 15 years of experience in
                                        cardiology, Dr. Smith is committed to
                                        improving patient health through
                                        advanced treatments and compassionate
                                        care.
                                    </p>
                                    <a className="btn-line" href="#">
                                        View Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb10">
                        <div className="doctor-profile s2 item">
                            <div className="post-content">
                                <div className="post-image">
                                    <img
                                        alt="Doctor 2"
                                        src={Doctor2}
                                        className="lazy"
                                    />
                                </div>
                                <div className="post-text">
                                    <h4>
                                        <a href="doctor-single.html">
                                            Dr. Emily Johnson
                                            <span></span>
                                        </a>
                                    </h4>
                                    <p>
                                        Dr. Johnson has been practicing
                                        pediatric care for over 12 years,
                                        helping children achieve optimal health
                                        with her gentle approach and expert
                                        knowledge.
                                    </p>
                                    <a className="btn-line" href="#">
                                        View Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb10">
                        <div className="doctor-profile s2 item">
                            <div className="post-content">
                                <div className="post-image">
                                    <img
                                        alt="Doctor 3"
                                        src={Doctor3}
                                        className="lazy"
                                    />
                                </div>
                                <div className="post-text">
                                    <h4>
                                        <a href="doctor-single.html">
                                            Dr. Michael Lee
                                            <span></span>
                                        </a>
                                    </h4>
                                    <p>
                                        Specializing in orthopedics for over 20
                                        years, Dr. Lee is known for his
                                        innovative approach to joint and bone
                                        health, ensuring patients regain
                                        mobility and live pain-free.
                                    </p>
                                    <a className="btn-line" href="#">
                                        View Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoctorProfiles;
