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
  const [status, setStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => setOpen(true), 2000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    // Professional Template
    const whatsappMessage = `
*🚀 New Enquiry Received!*
----------------------------
👤 *Name:* ${name}
📞 *Phone:* ${phone}
💬 *Message:* ${message}
----------------------------
*Sent from PR Webstock Website*
    `.trim();

    const phoneNumber = "917789801327";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");

    setStatus("SUCCESS");
    e.target.reset();
  };

  return (
    <>
      {open && (
        <div className="popup-overlay" onClick={() => setOpen(false)}>
          <div className="enquiry-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setOpen(false)}>
              <FaTimes />
            </button>

            <div className="popup-logo">
              <img src={logo} alt="PR Webstock Logo" />
            </div>

            {status === "SUCCESS" ? (
              <div className="success-msg">
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We will contact you shortly.</p>
              </div>
            ) : (
              <>
                <h3>Let's Talk</h3>
                <p>Fill in the form and we'll contact you shortly.</p>

                <form onSubmit={handleSubmit}>
                  <div className="input-box">
                    <FaUser />
                    <input type="text" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="input-box">
                    <FaPhoneAlt />
                    <input type="tel" name="phone" placeholder="Phone Number" required />
                  </div>
                  
                  <div className="input-box textarea-box">
                    <FaPaperPlane />
                    <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
                  </div>

                  <button type="submit" className="submit-btn">Send Enquiry via WhatsApp 💬</button>
                </form>
              </>
            )}

            <div className="quick-contact">
              <a href="tel:+917789801327"><FaPhoneAlt /></a>
              <a href="https://wa.me/917789801327" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
              <a href="mailto:info@prwebstock.com"><FaEnvelope /></a>
            </div>
          </div>
        </div>
      )}

      {!open && (
        <button className="floating-chat-btn" onClick={() => setOpen(true)}>
          <FaComments />
        </button>
      )}

      {showTop && (
        <button className="floating-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Floatingform;