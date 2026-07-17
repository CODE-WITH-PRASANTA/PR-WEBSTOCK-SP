import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import "./Footer.css";
import logo from "../../assets/PR WEBSTOCK LOGO.png";

const Footer = () => {
  
  const handleFooterSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const message = e.target.message.value;

    const whatsappMessage = `
*🚀 New Enquiry from Footer!*
----------------------------
👤 *Name:* ${name}
📞 *Phone:* ${phone}
📍 *Address:* ${address}
💬 *Message:* ${message}
----------------------------
*Sent from PR Webstock Website Footer*
    `.trim();

    const phoneNumber = "917789801327";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");

    e.target.reset();
  };

  return (
    <footer className="Footer">
      <div className="Footer__container">

        {/* About Section */}
        <div className="Footer__about">
          <img src={logo} alt="PR Webstock" className="Footer__logo" />
          <p className="Footer__description">
            PR WEBSTOCK is a leading software solution company delivering
            innovative digital services, web development, branding,
            digital marketing, and business solutions for modern
            enterprises.
          </p>
        </div>

        {/* Contact Form */}
        <div className="Footer__formSection">
          <h3 className="Footer__title">Get In Touch</h3>

          <form className="Footer__form" onSubmit={handleFooterSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="Footer__input"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone Number"
              className="Footer__input"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              className="Footer__input"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Enter Your Message"
              className="Footer__textarea"
              required
            ></textarea>

            <button type="submit" className="Footer__submitBtn">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Section */}
        <div className="Footer__column">
          <h3 className="Footer__title">Contact Us</h3>
          <div className="Footer__contactItem">
            <FaPhoneAlt />
            <a href="tel:+917789801327">+91 7789801327</a>
          </div>
          <div className="Footer__contactItem">
            <FaWhatsapp />
            <a href="https://wa.me/917789801327" target="_blank" rel="noopener noreferrer">
              WhatsApp Chat
            </a>
          </div>
          <div className="Footer__contactItem">
            <FaEnvelope />
            <a href="mailto:prwebstock.com@gmail.com">prwebstock.com@gmail.com</a>
          </div>
          <div className="Footer__contactItem">
            <FaMapMarkerAlt />
            <span>Bhubaneswar, Odisha, India</span>
          </div>
        </div>
      </div>

      <div className="Footer__bottom">
        <p>© {new Date().getFullYear()} PR WEBSTOCK. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;