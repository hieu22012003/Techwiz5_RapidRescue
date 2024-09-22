import { Input, Ripple, initMDB } from "mdb-ui-kit";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
const Infomation = () => {
  useEffect(() => {
    initMDB({ Input, Ripple });
  }, []);

  // State variables to capture form input
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    email: "",
    phone: "",
    additionalInfo: "",
    createAccount: true,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log(formValues);
    // Add your form submission logic here
  };

  return (
    <div>
      <>
        <div>
          <div
            className="page-wrapper"
            id="main-wrapper"
            data-layout="vertical"
            data-navbarbg="skin6"
            data-sidebartype="full"
            data-sidebar-position="fixed"
            data-header-position="fixed">
            {/* left side-bar */}
            <Sidebar />
            {/* right */}
            <div className="body-wrapper">
              {/* header */}
              <Nav />
              {/* body */}
              <div
                className="container-fluid"
                style={{
                  maxWidth: "100%",
                  paddingLeft: "0",
                  paddingRight: "0",
                }}>
                <div className="row">
                  <div className="col-lg-12 d-flex align-items-stretch">
                    <div className="w-100">
                      <h1 className="mb-2">Driver Information</h1>
                      <form style={{ backgroundColor: "rbg(252,252,252)" }}>
                        {/* 2 column grid layout with text inputs for the first and last names */}
                        <div className="row mb-4">
                          <div className="col">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form6Example1"
                                className="form-control"
                                name="firstName"
                                value={formValues.firstName}
                                onChange={handleChange}
                              />
                              <label
                                className="form-label"
                                htmlFor="form6Example1">
                                First name
                              </label>
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form6Example2"
                                className="form-control"
                                name="lastName"
                                value={formValues.lastName}
                                onChange={handleChange}
                              />
                              <label
                                className="form-label"
                                htmlFor="form6Example2">
                                Last name
                              </label>
                            </div>
                          </div>
                        </div>

                        {/* Text input */}
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form6Example3"
                            className="form-control"
                            name="companyName"
                            value={formValues.companyName}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form6Example3">
                            Company name
                          </label>
                        </div>

                        {/* Text input */}
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form6Example4"
                            className="form-control"
                            name="address"
                            value={formValues.address}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form6Example4">
                            Address
                          </label>
                        </div>

                        {/* Email input */}
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form6Example5"
                            className="form-control"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form6Example5">
                            Email
                          </label>
                        </div>

                        {/* Number input */}
                        <div className="form-outline mb-4">
                          <input
                            type="number"
                            id="form6Example6"
                            className="form-control"
                            name="phone"
                            value={formValues.phone}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form6Example6">
                            Phone
                          </label>
                        </div>

                        {/* Message input */}
                        <div className="form-outline mb-4">
                          <textarea
                            className="form-control"
                            id="form6Example7"
                            rows="4"
                            name="additionalInfo"
                            value={formValues.additionalInfo}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="form6Example7">
                            Additional information
                          </label>
                        </div>

                        {/* Checkbox */}
                        <div className="form-check d-flex justify-content-center mb-4">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            id="form6Example8"
                            name="createAccount"
                            checked={formValues.createAccount}
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form6Example8">
                            Create an account?
                          </label>
                        </div>

                        {/* Submit button */}
                        <button
                          type="button"
                          className="btn btn-primary btn-block mb-4"
                          onClick={handleSubmit}>
                          Place order
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Infomation;
