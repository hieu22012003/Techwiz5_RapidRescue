import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Blogs from "./Pages/Blogs";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import MedicalRecords from "./Pages/MedicalRecords";
import MyOrders from "./Pages/MyOrders";
import MyProfile from "./Pages/MyProfile";
// css
import "./Pages/css/bootstrap.min.css";
import "./Pages/css/coloring.css";
import "./Pages/css/colors/scheme-01.css";
import "./Pages/css/mdb.min.css";
import "./Pages/css/plugins.css";
import "./Pages/css/style.css";
// js
import "bootstrap/dist/js/bootstrap.bundle.min";
import "jquery";
import FindAmbulance from "./Pages/FindAmbulance";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/MedicalRecords" element={<MedicalRecords />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/MyOrders" element={<MyOrders />} />
        <Route path="/ambulance/tracker" element={<FindAmbulance />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
