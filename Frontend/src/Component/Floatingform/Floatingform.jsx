import React, { useEffect, useState } from "react";
import "./Floatingform.css";

import logo from "../../assets/prwebstock_logo.png";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowUp,
  FaComments,
  FaTimes,
  FaEnvelope,
  FaUser,
  FaPaperPlane,
} from "react-icons/fa";

const Floatingform = () => {
  const [showTop, setShowTop] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    const interval = setInterval(() => {
      setOpen(true);
    }, 10000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {open && (
        <div className="popup-overlay" onClick={() => setOpen(false)}>
          <div
            className="enquiry-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              <FaTimes />
            </button>

            {/* Logo */}
            <div className="popup-logo">
              <img src={logo} alt="PR Webstock Logo" />
            </div>

            <h3>Let's Talk</h3>

            <p>
              We'd love to hear about your project.
              Fill in the form and we'll contact you shortly.
            </p>

            <form>
              <div className="input-box">
                <FaUser />
                <input type="text" placeholder="Your Name" />
              </div>

              <div className="input-box">
                <FaPhoneAlt />
                <input type="tel" placeholder="Phone Number" />
              </div>

              <div className="input-box textarea-box">
                <FaPaperPlane />
                <textarea
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
              >
                Send Enquiry
              </button>
            </form>

            <div className="quick-contact">
              <a href="tel:+917789801327">
                <FaPhoneAlt />
              </a>

              <a
                href="https://wa.me/917789801327"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>

              <a href="mailto:info@prwebstock.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      )}

      {!open && (
        <button
          className="floating-chat-btn"
          onClick={() => setOpen(true)}
        >
          <FaComments />
        </button>
      )}

      {showTop && (
        <button
          className="floating-top"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Floatingform;