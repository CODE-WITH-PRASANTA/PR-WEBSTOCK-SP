import React from "react";
import "./MordenIdea.css";

import dashboardImg from "../../assets/why-need.webp";

import {
  FaSearch,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";

const MordenIdea = () => {
  return (
    <section className="mordenidea">

      {/* ================= Heading ================= */}

      <div className="mordenidea_heading">
        <h2>
          Why Your Business
          <br />
          Needs a Website
        </h2>
      </div>

      {/* ================= Container ================= */}

      <div className="mordenidea_container">

        {/* ================= Left ================= */}

        <div className="mordenidea_left">

          <div className="mordenidea_card">

            {/* Main Illustration */}

            <img
              src={dashboardImg}
              alt="Business Website Dashboard"
              className="mordenidea_dashboard"
            />

        
            {/* Floating Growth Card */}

            <div className="mordenidea_overview">

              <div className="progressCircle">
                <span>100%</span>
              </div>

              <div className="overviewText">
                <h4>Business Growth</h4>
                <p>Online Presence</p>
              </div>

              <FaChevronRight className="overviewArrow" />

            </div>


          </div>

        </div>

    <div className="mordenidea_right">

        <h3>Why Does Your Business Need a Website?</h3>

        <p className="mordenidea_description">
          A website is your online office. It helps people find your business,
          builds trust, and brings more customers. Your business stays online
          24/7 and is always ready for new opportunities.
        </p>

        <div className="mordenidea_item">

          <h1>01</h1>

          <p>
            Get found on Google, showcase your services, products and contact
            details, and turn visitors into customers with a professional website.
          </p>

        </div>

        <div className="mordenidea_item">

          <h1>02</h1>

          <p>
            We create fast, secure and mobile-friendly websites for Real Estate,
            Schools, NGOs, Startups, Companies, Restaurants, Hospitals,
            E-Commerce, and all types of businesses.
          </p>

        </div>

        <a
          href="https://wa.me/917789801327?text=Hello%20PR%20WEBSTOCK,%20I%20want%20to%20create%20a%20website%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="mordenidea_btn"
        >
          Contact Us
        </a>

      </div>

      </div>

    </section>
  );
};

export default MordenIdea;