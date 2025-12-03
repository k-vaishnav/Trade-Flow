import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./landingpage/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./landingpage/Navbar";
import Footer from "./landingpage/Footer";
import "./index.css";
import SignUp from "./landingpage/signup/Signup";
import Login from "./landingpage/Login/Login";
import AboutPage from "./landingpage/about/AboutPage";
import ProductPage from "./landingpage/products/ProductPage";
import PricingPage from "./landingpage/pricing/PricingPage";
import SupportPage from "./landingpage/support/SupportPage";
import NotFound from "./landingpage/NotFound";
import { ToastContainer } from "react-toastify";
import { CookiesProvider } from "react-cookie";
import ProfilePage from "./landingpage/profile/ProfilePage";
import AuthProvider from "./context/AuthProvider";
import ChatBotButton from "./landingpage/ChatBotButton";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <AuthProvider>
          <ToastContainer />
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatBotButton />
          <Footer />
        </AuthProvider>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
