import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import avatar from "../Pages/images/people/1.jpg"; // Correct avatar path

function MyProfileContent() {
    return (
        <div className="col-lg-3 mb30">
            <div className="card padding30 rounded-5">
                <div className="profile_avatar">
                    <div className="profile_img">
                        <img src={avatar} alt="Profile" />
                    </div>
                    <div className="profile_name">
                        <h4>
                            Monica Lucas
                            <span className="profile_username text-gray">
                                monica@rentaly.com
                            </span>
                        </h4>
                    </div>
                </div>
                <div className="spacer-20"></div>
                <ul className="menu-col">
                    <li>
                        <Link to="/MedicalRecords">
                            <i className="fa fa-home"></i>
                            Medical Records
                        </Link>
                    </li>
                    <li>
                        <Link to="/MyProfile" className="active">
                            <i className="fa fa-user"></i>My Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/MyOrders">
                            <i className="fa fa-calendar"></i>My Orders
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MyProfileContent;
