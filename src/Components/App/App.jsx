import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Home from "../Pages/Home/Home";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/sign-up/SignUp";
import TopLogo from "../Pages/Header/TopLogo";
import Tour from "../Pages/tour/Tour";
import * as React from "react";
import Visa from "../Pages/visa/Visa";
import VisaCanada from "../Pages/visa/VisaCanada";
import Certificate from "../Pages/certificate/Certificate";
import Insurance from "../Pages/insurance/Insurance";
import Flight from "../Pages/flight/Flight";
import Weblog from "../Pages/weblog/Weblog";
import Blog from "../Pages/weblog/Blog";
import ContactUs from "../Pages/contact-us/ContactUs";
import WhyUs from "../Pages/why-us/WhyUs";
import Rules from "../Pages/rules/Rules";
import AboutUs from "../Pages/aboutus/AboutUs";
import Landing from "../Pages/landing/Landing";
import FlightList from "../Pages/flight/FlightList";
import BuyTicket from "../Pages/flight/BuyTicket";
import TourList from "../Pages/tour/TourList";
import InsuranceList from "../Pages/insurance/InsuranceList";
import { useAuth } from "../../context/AuthContext";

// Middleware: Protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth(); // Get the authentication state from context

  if (!auth.token) {
    // If the user is not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  return children; // If authenticated, render the protected content
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/visa-canada" element={<VisaCanada />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/weblog" element={<Weblog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/flight-list" element={<FlightList />} />
          <Route path="/ticket" element={<BuyTicket />} />

          {/* Protected routes */}
          <Route
            path="/tour-list"
            element={
              <ProtectedRoute>
                <TourList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/insurance-list"
            element={
              <ProtectedRoute>
                <InsuranceList />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
