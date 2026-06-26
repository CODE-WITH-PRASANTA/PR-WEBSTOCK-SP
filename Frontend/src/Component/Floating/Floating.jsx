<<<<<<< HEAD
import React from "react";
import "./Floating.css";
import logo from "../../assets/PR WEBSTOCK LOGO.png";

import {
  FaTimes,
  FaUser,
  FaPhoneAlt,
  FaCommentDots,
  FaPaperPlane,
  FaWhatsapp,
} from "react-icons/fa";

const Floating = ({ onClose }) => {
  return (
    <div
      className="floating_overlay"
      onClick={onClose}
    >
      <div
        className="floating"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}

        <button
          className="floating_close"
          type="button"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        {/* Logo */}

        <div className="floating_logo_wrapper">
          <div className="floating_logo">
            <img src={logo} alt="PR Webstock" />
          </div>
        </div>

        {/* Heading */}

        <h2 className="floating_title">
          Let's Build Something Great Together!
        </h2>

        <p className="floating_subtitle">
          Need a website, software, mobile app, or digital solution?
          Fill out the form and our team will contact you shortly.
        </p>

        {/* Form */}

        <form className="floating_form">

          <div className="floating_inputbox">
            <FaUser />
            <input
              type="text"
              placeholder="Full Name"
            />
          </div>

          <div className="floating_inputbox">
            <FaPhoneAlt />
            <input
              type="tel"
              placeholder="Phone Number"
            />
          </div>

          <div className="floating_textarea">
            <FaCommentDots />
            <textarea
              placeholder="Tell us about your project"
            />
          </div>

          <button
            type="submit"
            className="floating_submit"
          >
            <FaPaperPlane />
            Submit Enquiry
          </button>

          <div className="floating_or">
            <span>OR</span>
          </div>

          <div className="floating_buttons">
                        <a
              href="tel:7064710042"
              className="floating_call"
            >
              <FaPhoneAlt />

              <div>
                <span>Call Us</span>
                <small>7064710042</small>
              </div>
            </a>

            <a
              href="https://wa.me/917789801327"
              target="_blank"
              rel="noreferrer"
              className="floating_whatsapp"
            >
              <FaWhatsapp />

              <div>
                <span>WhatsApp</span>
                <small>7789801327</small>
              </div>
            </a>

          </div>

        </form>

      </div>

=======
import React, { useEffect, useState } from "react";
import "./Floating.css";
import { FaPhoneAlt, FaWhatsapp, FaArrowUp } from "react-icons/fa";

const Floating = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-container">
      {/* Phone */}
      <a
        href="tel:+917789801327"
        className="floating-btn phone"
        aria-label="Call PR WEBSTOCK"
      >
        <span className="tooltip">Call: 7789801327</span>
        <FaPhoneAlt />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/917789801327"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp"
        aria-label="WhatsApp PR WEBSTOCK"
      >
        <span className="tooltip">WhatsApp: 7789801327</span>
        <FaWhatsapp />
      </a>

      {/* Back to Top */}
      {showTop && (
        <button
          type="button"
          className="floating-btn top"
          onClick={scrollToTop}
          aria-label="Back to Top"
        >
          <span className="tooltip">Back to Top</span>
          <FaArrowUp />
        </button>
      )}
>>>>>>> ab3d377d888fbd3b1c7da6351145de7d23766074
    </div>
  );
};

export default Floating;