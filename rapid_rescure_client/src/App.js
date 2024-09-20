import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Booking from "./Pages/Booking";
import Service from "./Pages/Service";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
// css
import "./Pages/css/bootstrap.min.css";
import "./Pages/css/mdb.min.css";
import "./Pages/css/plugins.css";
import "./Pages/css/style.css";
import "./Pages/css/coloring.css";
import "./Pages/css/colors/scheme-01.css";
// js
import "bootstrap/dist/js/bootstrap.bundle.min";
import "jquery";

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
                <Route path="/Register" element={<Register />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
