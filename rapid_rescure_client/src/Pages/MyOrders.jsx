import React from "react";
import MyProfileContent from "../Components/MyProfileContent";
import BgImages from "../Pages/images/background/3.jpg"; // Ensure the correct image path

function MyOrders() {
    const sectionStyle = {
        height: "50vh", // 50% of the viewport height
        backgroundImage: `url(${BgImages})`, // Correctly assign the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div>
            {/* Subheader Section */}
            <section
                id="subheader"
                className="jarallax text-light"
                style={sectionStyle}
            >
                <div className="center-y relative text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1>My Orders</h1>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Orders Section */}
            <section id="section-settings" className="bg-gray-100">
                <div className="container">
                    <div className="row">
                        <MyProfileContent />
                        <div className="col-lg-9">
                            {/* Scheduled Orders */}
                            <div className="card padding30 rounded-5 mb25">
                                <h4>Scheduled Orders</h4>
                                <table className="table de-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Order ID
                                                </span>
                                            </th>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Car Name
                                                </span>
                                            </th>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Pick Up Location
                                                </span>
                                            </th>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Drop Off Location
                                                </span>
                                            </th>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Pick Up Date
                                                </span>
                                            </th>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Return Date
                                                </span>
                                            </th>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Status
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="badge bg-gray-100 text-dark">
                                                    #01245
                                                </div>
                                            </td>
                                            <td>
                                                <span className="bold">
                                                    Ferrari Enzo
                                                </span>
                                            </td>
                                            <td>Kentucky</td>
                                            <td>Michigan</td>
                                            <td>March 14, 2023</td>
                                            <td>March 16, 2023</td>
                                            <td>
                                                <div className="badge rounded-pill bg-warning">
                                                    scheduled
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="badge bg-gray-100 text-dark">
                                                    #01245
                                                </div>
                                            </td>
                                            <td>
                                                <span className="bold">
                                                    VW Polo
                                                </span>
                                            </td>
                                            <td>Philadelphia</td>
                                            <td>Washington</td>
                                            <td>March 16, 2023</td>
                                            <td>March 18, 2023</td>
                                            <td>
                                                <div className="badge rounded-pill bg-warning">
                                                    scheduled
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="badge bg-gray-100 text-dark">
                                                    #01216
                                                </div>
                                            </td>
                                            <td>
                                                <span className="bold">
                                                    Toyota Rav 4
                                                </span>
                                            </td>
                                            <td>Baltimore</td>
                                            <td>Sacramento</td>
                                            <td>March 19, 2023</td>
                                            <td>March 20, 2023</td>
                                            <td>
                                                <div className="badge rounded-pill bg-warning">
                                                    scheduled
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Completed Orders */}
                            <div className="card padding30 rounded-5 mb25">
                                <h4>Completed Orders</h4>
                                <table className="table de-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Order ID
                                                </span>
                                            </th>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Car Name
                                                </span>
                                            </th>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Pick Up Location
                                                </span>
                                            </th>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Drop Off Location
                                                </span>
                                            </th>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Pick Up Date
                                                </span>
                                            </th>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Return Date
                                                </span>
                                            </th>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Status
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="badge bg-gray-100 text-dark">
                                                    #01236
                                                </div>
                                            </td>
                                            <td>
                                                <span className="bold">
                                                    Jeep Renegade
                                                </span>
                                            </td>
                                            <td>New York</td>
                                            <td>Los Angeles</td>
                                            <td>March 2, 2023</td>
                                            <td>March 11, 2023</td>
                                            <td>
                                                <div className="badge rounded-pill bg-success">
                                                    completed
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="badge bg-gray-100 text-dark">
                                                    #01287
                                                </div>
                                            </td>
                                            <td>
                                                <span className="bold">
                                                    Hyundai Staria
                                                </span>
                                            </td>
                                            <td>Nevada</td>
                                            <td>New Mexico</td>
                                            <td>March 6, 2023</td>
                                            <td>March 12, 2023</td>
                                            <td>
                                                <div className="badge rounded-pill bg-success">
                                                    completed
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="badge bg-gray-100 text-dark">
                                                    #01236
                                                </div>
                                            </td>
                                            <td>
                                                <span className="bold">
                                                    Range Rover
                                                </span>
                                            </td>
                                            <td>Virginia</td>
                                            <td>Oregon</td>
                                            <td>March 2, 2023</td>
                                            <td>March 13, 2023</td>
                                            <td>
                                                <div className="badge rounded-pill bg-success">
                                                    completed
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Cancelled Orders */}
                            <div className="card padding30 rounded-5 mb25">
                                <h4>Cancelled Orders</h4>
                                <table className="table de-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Order ID
                                                </span>
                                            </th>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Car Name
                                                </span>
                                            </th>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Pick Up Location
                                                </span>
                                            </th>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Drop Off Location
                                                </span>
                                            </th>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Pick Up Date
                                                </span>
                                            </th>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Return Date
                                                </span>
                                            </th>
                                            <th scope="col">
                                                <span className="fs-12 text-gray">
                                                    Status
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="badge bg-gray-100 text-dark">
                                                    #01263
                                                </div>
                                            </td>
                                            <td>
                                                <span className="bold">
                                                    Mini Cooper
                                                </span>
                                            </td>
                                            <td>San Francisco</td>
                                            <td>Chicago</td>
                                            <td>March 8, 2023</td>
                                            <td>March 12, 2023</td>
                                            <td>
                                                <div className="badge rounded-pill bg-danger">
                                                    cancelled
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="badge bg-gray-100 text-dark">
                                                    #01263
                                                </div>
                                            </td>
                                            <td>
                                                <span className="bold">
                                                    Ford Raptor
                                                </span>
                                            </td>
                                            <td>Georgia</td>
                                            <td>Lousiana</td>
                                            <td>March 8, 2023</td>
                                            <td>March 13, 2023</td>
                                            <td>
                                                <div className="badge rounded-pill bg-danger">
                                                    cancelled
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MyOrders;
