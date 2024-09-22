import React, { useEffect, useState } from "react";

const Nav = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    // Lấy dữ liệu từ URL khi component mount
    const urlParams = new URLSearchParams(window.location.search);
    const data = urlParams.get("data");
    if (data) {
      setIsLogin(true); // Chỉ cập nhật isLogin khi có dữ liệu
      const parsedData = JSON.parse(decodeURIComponent(data));
      console.log(parsedData); // Dữ liệu userData được truyền từ localhost:3000
      setUserData(parsedData);
    }
  }, []); // Chạy một lần khi component mount

  //   useEffect(() => {
  //     const checkUserStatus = () => {
  //       if (!isLogin) window.location.href = "http://localhost:3000";
  //     };

  //     checkUserStatus();
  //     const interval = setInterval(checkUserStatus, 1000);
  //     return () => clearInterval(interval);
  //   }, []);

  useEffect(() => {
    const updateDateTime = () => {
      const dateToday = new Date();
      const formattedDateTime =
        dateToday.getFullYear() +
        "-" +
        String(dateToday.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(dateToday.getDate()).padStart(2, "0") +
        " " +
        String(dateToday.getHours()).padStart(2, "0") +
        ":" +
        String(dateToday.getMinutes()).padStart(2, "0") +
        ":" +
        String(dateToday.getSeconds()).padStart(2, "0");
      setCurrentDateTime(formattedDateTime);
    };

    updateDateTime(); // Cập nhật lần đầu tiên
    const intervalId = setInterval(updateDateTime, 1000); // Cập nhật mỗi giây

    return () => clearInterval(intervalId); // Xoá interval khi component bị huỷ
  }, []);

  const handleLogout = () => {
    setIsLogin(false);
    window.location.href = "http://localhost:3000";
  };
  return (
    <header className="app-header">
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ marginTop: "12px" }}>
        <div
          className="navbar-collapse d-flex justify-content-between px-0"
          id="navbarNav">
          <div>
            <h4 style={{ color: "#495057" }}>
              <b>Today: </b>
              {currentDateTime}
            </h4>
          </div>

          <div
            className="d-flex align-items-center"
            style={{ fontSize: "18px" }}>
            Hello, {userData && userData.userName}{" "}
            <button className="btn" onClick={handleLogout}>
              {" "}
              logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
