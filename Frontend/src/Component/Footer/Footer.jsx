import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import "./Footer.css";
import logo from "../../assets/PR WEBSTOCK LOGO.png";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__container">

        {/* About Section */}
        <div className="Footer__about">
          <img
            src={logo}
            alt="PR Webstock"
            className="Footer__logo"
          />

          <p className="Footer__description">
            PR WEBSTOCK is a leading software solution company delivering
            innovative digital services, web development, branding,
            digital marketing, and business solutions for modern
            enterprises.
          </p>

          <div className="Footer__socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="Footer__socialLink"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="Footer__socialLink"
            >
              <FaTwitter />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="Footer__socialLink"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="Footer__socialLink"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="Footer__formSection">
          <h3 className="Footer__title">
            Get In Touch
          </h3>

          <form className="Footer__form">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="Footer__input"
            />

            <input
              type="tel"
              placeholder="Enter Phone Number"
              className="Footer__input"
            />

            <input
              type="text"
              placeholder="Enter Address"
              className="Footer__input"
            />

            <textarea
              rows="5"
              placeholder="Enter Your Message"
              className="Footer__textarea"
            ></textarea>

            <button
              type="submit"
              className="Footer__submitBtn"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Section */}
        <div className="Footer__column">
          <h3 className="Footer__title">
            Contact Us
          </h3>

          <div className="Footer__contactItem">
            <FaPhoneAlt />
            <a href="tel:+917789801327">
              +91 7789801327
            </a>
          </div>

          <div className="Footer__contactItem">
            <FaWhatsapp />
            <a
              href="https://wa.me/917789801327"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Chat
            </a>
          </div>

          <div className="Footer__contactItem">
            <FaEnvelope />
            <a href="mailto:info@prwebstock.com">
              info@prwebstock.com
            </a>
          </div>

          <div className="Footer__contactItem">
            <FaMapMarkerAlt />
            <span>
              Bhubaneswar, Odisha, India
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="Footer__bottom">
        <p>
          © {new Date().getFullYear()} PR WEBSTOCK.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;