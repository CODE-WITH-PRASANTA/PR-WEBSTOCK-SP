import React from "react";
import "./BusinessIdea.css";

import businessImg from "../../assets/Company Details.webp";

import {
  FaBuilding,
  FaGlobe,
  FaArrowRight,
} from "react-icons/fa";

const BusinessIdea = () => {

  const whatsappMessage = encodeURIComponent(
    "Hello PR WEBSTOCK, I would like to build a website for my business. Please share your packages."
  );

  return (
    <section className="businessidea">

      <div className="businessidea_container">

        {/* LEFT */}

        <div className="businessidea_left">

          <div className="businessidea_box">

            <div className="businessidea_icon">
              <FaBuilding />
            </div>

            <div>

              <h2>Trusted & Registered Company</h2>

              <p>
                PR WEBSTOCK (OPC) PVT LTD is a registered website
                development company delivering professional, secure,
                and modern business websites for clients across India.
              </p>

            </div>

          </div>

          <div className="businessidea_box">

            <div className="businessidea_icon">
              <FaGlobe />
            </div>

            <div>

              <h2>Websites for Every Business</h2>

              <p>
                We build websites for Schools, Real Estate,
                Companies, NGOs, Hospitals, Restaurants,
                Startups, E-Commerce Stores, Portfolios,
                Hotels, Consultants and many more.
              </p>

            </div>

          </div>

          <a
            href={`https://wa.me/917789801327?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="businessidea_btn"
          >
            Contact Us
            <FaArrowRight />
          </a>

        </div>

        {/* RIGHT */}

        <div className="businessidea_right">

          <img
            src={businessImg}
            alt="PR WEBSTOCK"
            className="businessidea_image"
          />

          <div className="businessidea_card">

            <div className="businessidea_card_top">

              <div>

                <span>MCA VERIFIED</span>

                <h2>PR WEBSTOCK</h2>

              </div>

              <div className="businessidea_total">

                <h3>OPC</h3>

                <h3>PVT LTD</h3>

              </div>

            </div>

            <div className="businessidea_card_bottom">

              <p>
                CIN : U62010OD2025OPC051339
              </p>

              <div className="businessidea_number">
                ✓
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BusinessIdea;