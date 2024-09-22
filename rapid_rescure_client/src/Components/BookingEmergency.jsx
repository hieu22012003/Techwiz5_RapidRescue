import axios from "axios";
import React, { useEffect, useState } from "react";
import ambulanceCircle from "../Pages/assets/img/xecuuthuongVuong.png";
import ambulanceSvg from "../Pages/assets/svg/ambulance-svgrepo-com.svg";
import locationSvg from "../Pages/assets/svg/location-svgrepo-com.svg";
import Slider1 from "../Pages/images/slider/1.jpg";
const BookingEmergency = () => {
  const [query, setQuery] = useState("");
  const [query1, setQuery1] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestions1, setSuggestions1] = useState([]);

  const [timeoutId, setTimeoutId] = useState(null);
  const [timeoutId1, setTimeoutId1] = useState(null);
  const [location, setLocation] = useState("");
  const [locationDropOff, setLocationDropOff] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(null);
  const [bookingType, setBookingType] = useState("emergency"); // emergency or scheduled
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [ambulances, setAmbulances] = useState([]);
  const [nearestAmbulance, setNearestAmbulance] = useState(null);
  const fetchHospitals = () => {
    axios
      .get("http://localhost:8080/hospital")
      .then((response) => {
        setHospitals(response.data);
      })
      .catch((error) => {
        console.error("Error fetching hospital data:", error);
      });
  };

  const fetchAmbulancesAvai = () => {
    axios
      .get("http://localhost:8080/ambulances/available")
      .then((res) => {
        setAmbulances(res.data);
      })
      .catch((err) => {
        console.error("Err to fetch ambulances available: ", err);
      });
  };

  // Gọi hàm fetchHospitals khi component mount
  useEffect(() => {
    fetchHospitals();
    fetchAmbulancesAvai();
  }, []);
  console.log("Hospital: ", hospitals);
  console.log("Ambulance: ", ambulances);

  // Hàm debounce để tối ưu tìm kiếm
  const debounceSearchLocation = () => {
    if (timeoutId1) clearTimeout(timeoutId1);
    const newTimeoutId = setTimeout(searchLocation, 500); // Gọi tìm kiếm sau 500ms nếu không có input mới
    setTimeoutId(newTimeoutId);
  };
  const debounceSearchLocation1 = () => {
    if (timeoutId) clearTimeout(timeoutId);
    const newTimeoutId1 = setTimeout(searchLocation1, 500); // Gọi tìm kiếm sau 500ms nếu không có input mới
    setTimeoutId1(newTimeoutId1);
  };
  // Hàm tìm kiếm địa điểm qua Nominatim API
  const searchLocation = () => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    axios
      .get(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1&limit=5`
      )
      .then((response) => {
        setSuggestions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
      });
  };
  const searchLocation1 = () => {
    if (query.length < 3) {
      setSuggestions1([]);
      return;
    }

    const nearestHospitals = findNearestHospitals(location);
    setSuggestions1(nearestHospitals);
  };
  // Hàm chọn địa điểm và hiển thị tọa độ
  //   const chooseLocation = (location) => {
  //     setQuery(location.display_name);
  //     setLocation({
  //       lat: location.lat,
  //       lon: location.lon,
  //     });
  //     setSuggestions([]); // Xóa danh sách gợi ý sau khi chọn
  //   };

  // const chooseLocationDropOff = (location) => {
  //     setQuery1(location.display_name);
  //     setLocationDropOff({
  //       latitude: parseFloat(location.lat),
  //       longitude: parseFloat(location.lon),
  //     });
  //     setSuggestions1([]); // Xóa danh sách gợi ý sau khi chọn
  //   };
  const findNearestAmbulance = (pickupLocation) => {
    const [pickupLat, pickupLon] = pickupLocation.split(",").map(Number);

    if (ambulances.length === 0) {
      return null; // Nếu không có xe cứu thương nào
    }

    const nearestAmbulance = ambulances
      .map((ambulance) => {
        // Giả sử bạn đã có tọa độ cho từng xe cứu thương trong data (bạn cần thêm thông tin tọa độ vào model xe cứu thương)
        const [ambulanceLat, ambulanceLon] = ambulance.lastLocation
          .split(",")
          .map(Number);
        const distance = calculateDistance(
          pickupLat,
          pickupLon,
          ambulanceLat,
          ambulanceLon
        );
        return { ...ambulance, distance: distance.toFixed(2) };
      })
      .sort((a, b) => a.distance - b.distance)[0]; // Lấy xe cứu thương gần nhất

    return nearestAmbulance;
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Bán kính Trái Đất (km)
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Khoảng cách tính bằng km
  };
  // Cập nhật hàm tính bệnh viện gần nhất
  const findNearestHospitals = (pickupLocation) => {
    const [latitude, longitude] = pickupLocation.split(",").map(Number); // Phân tích chuỗi thành mảng số

    const nearestHospitals = hospitals
      .map((hospital) => {
        const [hospitalLat, hospitalLon] = hospital.location
          .split(",")
          .map(Number); // Phân tích chuỗi tọa độ của bệnh viện
        const distance = calculateDistance(
          latitude, // latitude của vị trí pickup
          longitude, // longitude của vị trí pickup
          hospitalLat, // hospitalLat của bệnh viện
          hospitalLon // hospitalLon của bệnh viện
        );
        return { ...hospital, distance: distance.toFixed(2) };
      })
      .sort((a, b) => a.distance - b.distance);

    return nearestHospitals;
  };

  const chooseLocation = (location) => {
    setQuery(location.display_name);
    setLocation(`${location.lat},${location.lon}`); // Lưu tọa độ dưới dạng chuỗi
    setSuggestions([]);

    const nearestHospitals = findNearestHospitals(
      `${location.lat},${location.lon}`
    );

    const nearestAmbulances = findNearestAmbulance(
      `${location.lat},${location.lon}`
    );

    setSuggestions1(nearestHospitals);
    setNearestAmbulance(nearestAmbulances);
  };

  const chooseLocationDropOff = (location) => {
    setQuery1(location.hospitalName);
    setLocationDropOff(`${location.lat},${location.lon}`);
    setSuggestions1([]);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "granted") {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
          } else if (permissionStatus.state === "prompt") {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
          } else if (permissionStatus.state === "denied") {
            setError(
              "Quyền truy cập vị trí đã bị từ chối. Vui lòng cấp quyền truy cập."
            );
          }
        });
    } else {
      setError("Trình duyệt của bạn không hỗ trợ Geolocation.");
    }
  };
  const getLocation1 = () => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "granted") {
            navigator.geolocation.getCurrentPosition(showPosition1, showError);
          } else if (permissionStatus.state === "prompt") {
            navigator.geolocation.getCurrentPosition(showPosition1, showError);
          } else if (permissionStatus.state === "denied") {
            setError(
              "Quyền truy cập vị trí đã bị từ chối. Vui lòng cấp quyền truy cập."
            );
          }
        });
    } else {
      setError("Trình duyệt của bạn không hỗ trợ Geolocation.");
    }
  };

  const showPosition = (position) => {
    setLocation(`${position.coords.latitude},${position.coords.longitude}`); // Lưu dưới dạng chuỗi
    setQuery(`${position.coords.latitude},${position.coords.longitude}`);
    setError(null);
    const nearestHospitals = findNearestHospitals(
      `${position.coords.latitude},${position.coords.longitude}`
    );

    const nearestAmbulances = findNearestAmbulance(
      `${position.coords.latitude},${position.coords.longitude}`
    );

    setSuggestions1(nearestHospitals);
    setNearestAmbulance(nearestAmbulances);
  };

  const showPosition1 = (position) => {
    setLocationDropOff(
      `${position.coords.latitude},${position.coords.longitude}`
    ); // Lưu dưới dạng chuỗi
    setQuery1(`${position.coords.latitude},${position.coords.longitude}`);
    setError(null);
  };

  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setError("Người dùng từ chối yêu cầu lấy vị trí.");
        break;
      case error.POSITION_UNAVAILABLE:
        setError("Thông tin vị trí không có sẵn.");
        break;
      case error.TIMEOUT:
        setError("Yêu cầu lấy vị trí quá thời gian cho phép.");
        break;
      default:
        setError("Đã xảy ra lỗi không xác định.");
    }
  };

  const handleBookingTypeChange = (event) => {
    setBookingType(event.target.value);
  };

  const formContainerStyle = {
    position: "relative",
    background: `url(${Slider1}) no-repeat center center/cover`,
    width: "100%",
    padding: "150px 100px 20px 100px",
  };

  const overlayStyle = {
    padding: "50px",
    borderRadius: "8px",
    color: "white",
    width: "65vw",
  };

  const buttonStyle = {
    backgroundColor: "#d94b7b",
    border: "none",
    color: "#fff",
  };

  return (
    <section
      id="section-hero"
      aria-label="section"
      className=""
      style={{ paddingTop: "150px" }}
      data-bgcolor="#121212">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 mt-80 sm-mt-0">
            <div className="spacer-single sm-hide" />
            <div className="form-booking-emergency">
              <div style={overlayStyle}>
                <form
                  name="contactForm"
                  id="booking_form"
                  className="form-s2 row g-4 on-submit-hide"
                  method="post"
                  action="#">
                  {/* Booking type switcher */}
                  <div className="col-lg-12">
                    <h5 style={{ color: "#222" }}>Choose Booking Type</h5>
                    <div>
                      <label
                        style={{
                          color: "black",
                          marginLeft: "20px",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}>
                        <input
                          type="radio"
                          value="emergency"
                          checked={bookingType === "emergency"}
                          onChange={handleBookingTypeChange}
                        />{" "}
                        Emergency Booking
                      </label>
                      <label
                        style={{
                          marginLeft: "20px",
                          color: "black",
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}>
                        <input
                          type="radio"
                          value="scheduled"
                          checked={bookingType === "scheduled"}
                          onChange={handleBookingTypeChange}
                        />{" "}
                        Scheduled Booking
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-8">
                    <div className="row g-4 mb-2">
                      <div className="col-lg-6">
                        <h5 style={{ color: "#222" }}>Email</h5>
                        <div className="d-flex w-100 ">
                          <input
                            type="text"
                            name="Email"
                            id="pick_up_location email"
                            className="form-control opt-1-disable"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <h5 style={{ color: "#222" }}>Phone Number</h5>
                        <div className="d-flex w-100 ">
                          <input
                            type="text"
                            name="PhoneNumber"
                            id="drop_off_location phoneNumber"
                            className="form-control opt-1-disable"
                            placeholder="Your Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <h5 style={{ color: "#222" }}>Pick Up Location</h5>
                        <div className="d-flex w-100 relative-suggestion">
                          <input
                            type="text"
                            name="Pick Up Location"
                            id="pick_up_location"
                            className="form-control opt-1-disable"
                            placeholder="Your Pick Up Location"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={debounceSearchLocation}
                          />
                          <div className="suggestions">
                            {suggestions.map((location, index) => (
                              <div
                                key={index}
                                className="suggestion-item"
                                onClick={() => chooseLocation(location)}>
                                {location.display_name}
                              </div>
                            ))}
                          </div>

                          <button
                            type="button"
                            className="btn-location"
                            onClick={getLocation}>
                            <img src={locationSvg} alt="location icon" />
                          </button>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <h5 style={{ color: "#222" }}>Drop Off Location</h5>
                        <div className="d-flex w-100 relative-suggestion">
                          <input
                            type="text"
                            name="Drop Off Location"
                            id="drop_off_location"
                            className="form-control opt-1-disable"
                            placeholder="Your Drop Off Location"
                            value={query1}
                            onChange={(e) => setQuery1(e.target.value)}
                            onKeyUp={debounceSearchLocation1}
                          />
                          <div className="suggestions">
                            {suggestions1.map((location, index) => (
                              <div
                                key={index}
                                className="suggestion-item"
                                onClick={() => chooseLocationDropOff(location)}>
                                {location.hospitalName} - {location.distance} km
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {bookingType === "scheduled" ? (
                        <>
                          <div className="col-lg-6">
                            <h5
                              style={{
                                color: "#222",
                              }}>
                              Pick a Date
                            </h5>
                            <input
                              type="date"
                              className="form-control"
                              value={scheduledDate}
                              onChange={(e) => setScheduledDate(e.target.value)}
                              required={bookingType === "scheduled"}
                            />
                          </div>
                          <div className="col-lg-6">
                            <h5
                              style={{
                                color: "#222",
                              }}>
                              Pick a Time
                            </h5>
                            <input
                              type="time"
                              className="form-control"
                              value={scheduledTime}
                              onChange={(e) => setScheduledTime(e.target.value)}
                              required={bookingType === "scheduled"}
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className="col-lg-6"
                            style={{
                              visibility: "hidden",
                            }}>
                            <h5
                              style={{
                                color: "#222",
                              }}>
                              Pick a Date
                            </h5>
                            <input
                              type="date"
                              className="form-control"
                              value={scheduledDate}
                              onChange={(e) => setScheduledDate(e.target.value)}
                              required={bookingType === "scheduled"}
                            />
                          </div>
                          <div
                            className="col-lg-6"
                            style={{
                              visibility: "hidden",
                            }}>
                            <h5
                              style={{
                                color: "#222",
                              }}>
                              Pick a Time
                            </h5>
                            <input
                              type="time"
                              className="form-control"
                              value={scheduledTime}
                              onChange={(e) => setScheduledTime(e.target.value)}
                              required={bookingType === "scheduled"}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-4 px-3">
                    <div className="row g-4">
                      {bookingType === "scheduled" ? (
                        <>
                          {" "}
                          <div className="px-0 container">
                            <h5
                              style={{
                                color: "#222",
                              }}
                              className="w-100">
                              Choose car type
                            </h5>
                            <div className="row mx-0 nearest_car_content">
                              <div className="col-lg-12">
                                <select
                                  id="nearest_car"
                                  name="Nearest Car"
                                  className="w-100">
                                  <option value="ambulance">Ambulance</option>
                                </select>
                              </div>
                            </div>
                            <div className="row mt-3 mx-0">
                              <input
                                type="submit"
                                id="send_message"
                                defaultValue="Booking"
                                className="btn-main w-100 mx-auto px-0"
                                style={buttonStyle}
                              />
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {" "}
                          <div className="px-0 container">
                            <h5
                              style={{
                                color: "#222",
                              }}
                              className="w-100">
                              Nearest car
                            </h5>
                            <div className="row mx-0 nearest_car_content">
                              <div className="col-lg-2">
                                <img
                                  src={ambulanceSvg}
                                  alt="ambulance icon"
                                  className="w-100"
                                  style={{
                                    scale: "1.3",
                                  }}
                                />
                              </div>
                              <div className="col-lg-10">
                                <input
                                  type="text"
                                  disabled
                                  id="nearest_car"
                                  name="Nearest Car"
                                  value={
                                    nearestAmbulance
                                      ? nearestAmbulance.licensePlate
                                      : "N/A"
                                  }
                                  placeholder="Nearest Car"
                                  className="w-100"
                                />
                              </div>
                            </div>
                            <div className="row mt-3 mx-0">
                              <input
                                type="submit"
                                id="send_message"
                                value="Booking"
                                className="btn-main w-100 mx-auto px-0"
                                style={buttonStyle}
                              />
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </form>
              </div>
              <div
                className="under-form container-fluid mt-5"
                style={{ paddingLeft: "15px" }}>
                <div className="row row-box">
                  <div className="col-lg-3">
                    <div className="box"></div>
                    <hr className="lineBoxx" />
                  </div>
                  <div className="col-lg-3">
                    <div className="box"></div>
                    <hr className="lineBoxx" />
                  </div>
                  <div className="col-lg-3">
                    <div className="box"></div>
                    <hr className="lineBoxx" />
                  </div>
                  <div className="col-lg-3">
                    <div className="box"></div>
                  </div>
                </div>
                <div className="row row-content mt-5">
                  <div className="col-lg-3">
                    <h5 className="title">Choose a vehicle</h5>
                    <p className="content">
                      Unlock unparalleled adventures and memorable journeys with
                      our vast fleet of vehicles tailored to suit every need,
                      taste, and destination.
                    </p>
                  </div>
                  <div className="col-lg-3">
                    <h5 className="title">Pick location & date</h5>
                    <p className="content">
                      Pick your ideal location and date, and let us take you on
                      a journey filled with convenience, flexibility, and
                      unforgettable experiences.
                    </p>
                  </div>
                  <div className="col-lg-3">
                    <h5 className="title">Make a booking</h5>
                    <p className="content">
                      Secure your reservation with ease, unlocking a world of
                      possibilities and embarking on your next adventure with
                      confidence.
                    </p>
                  </div>
                  <div className="col-lg-3">
                    <h5 className="title">Sit back & relax</h5>
                    <p className="content">
                      Hassle-free convenience as we take care of every detail,
                      allowing you to unwind and embrace a journey filled
                      comfort.
                    </p>
                  </div>
                </div>
              </div>
              <div className="circle-ambulance">
                <img src={ambulanceCircle} alt="ambulance" />
              </div>
            </div>
          </div>
        </div>
        <div className="spacer-double" />
      </div>
    </section>
  );
};

export default BookingEmergency;
