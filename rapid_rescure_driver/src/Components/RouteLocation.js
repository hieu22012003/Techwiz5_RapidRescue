import axios from "axios";
import React, { useEffect } from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
const RouteLocation = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Thành công: lấy được vị trí
          const { latitude, longitude } = position.coords;
          console.log("Vị trí:", { latitude, longitude });
          axios
            .post(
              "http://localhost:8080/api/v1/gps/location/update",
              {
                vehicleId: "ambulance-1",
                latitude: latitude,
                longitude: longitude,
                timestamp: new Date(),
              },
              {
                withCredentials: true, // Nếu bạn cần gửi thông tin xác thực
              }
            )
            .then(() => {
              console.log("Vị trí đã được gửi thành công.");
            })
            .catch((error) => {
              console.error("Gửi vị trí thất bại:", error);
            });
        },
        (error) => {
          // Lỗi: không lấy được vị trí
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.error("Người dùng từ chối yêu cầu truy cập vị trí.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.error("Thông tin vị trí không khả dụng.");
              break;
            case error.TIMEOUT:
              console.error("Yêu cầu lấy vị trí đã hết thời gian.");
              break;
            default:
              console.error("Lỗi không xác định khi lấy vị trí.");
              break;
          }
        },
        {
          enableHighAccuracy: true, // Yêu cầu vị trí có độ chính xác cao
          //  timeout: 10000, // Giới hạn thời gian tối đa để chờ lấy vị trí (ms)
        }
      );
    }, 2000); // Gọi hàm mỗi 2 giây

    return () => clearInterval(intervalId); // Xóa interval khi component unmount
  }, []);
  return (
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
                  <div className="card w-100">
                    Đã bắt đầu gửi vị trí đến người dùng
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RouteLocation;
