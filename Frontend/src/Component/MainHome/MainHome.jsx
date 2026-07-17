import React from "react";
import "./MainHome.css";
import { FaPlay } from "react-icons/fa";

import officeImg from "../../assets/hero-img.webp";

const MainHome = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello PR WEBSTOCK,\n\nI want to create a custom business website for my company. Please share your website packages and pricing.\n\nThank you."
  );

  return (
    <section className="mainhome">
      <div className="mainhome_container">
        {/* ================= LEFT ================= */}

        <div className="mainhome_left">
          <span className="mainhome_tag">
            PR WEBSTOCK • WEBSITE DEVELOPMENT
          </span>

          <h1>
            Create Your Own
            <br />
            Business Website
          </h1>

        <p>
          We design modern, fast and mobile-friendly websites for Real Estate,
          Schools, NGOs, Startups, Businesses, Companies, Hospitals, Hotels,
          Restaurants, E-commerce Stores, and Personal Brands. Choose from
          Single Page, Multi-Page, or Fully Custom Website Designs tailored to
          your business.
        </p>
          <p>
            Get a professional website that helps you grow your business and
            reach more customers online.
          </p>

          <div className="mainhome_buttons">
            <a
              href={`https://wa.me/917789801327?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="start_btn"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
{/* ================= RIGHT ================= */}
<div className="mainhome_right">
  <img
    src={officeImg}
    alt="PR WEBSTOCK Website Development"
    className="office_img"
  />

  {/* Clicking this wrapper will open the link */}
  <a 
    href="https://www.instagram.com/reel/DapBA-JPtTn/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="play_wrapper"
  >
    <div className="rotate_circle">
      <svg viewBox="0 0 200 200">
        <defs>
          <path id="circlePath" d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0" />
        </defs>
        <text>
          <textPath href="#circlePath" startOffset="0%">
            • PR WEBSTOCK • WATCH OUR WORK • DIGITAL SOLUTIONS •
          </textPath>
        </text>
      </svg>
      <div className="play_button">
        <FaPlay />
      </div>
    </div>
  </a>
</div>
      </div>

      {/* ================= STATS ================= */}

      <div className="mainhome_stats">
        <div className="stat">
          <h2>250+</h2>

          <div>
            <h4>Projects</h4>

            <p>Websites successfully delivered to our clients.</p>
          </div>
        </div>

        <div className="stat">
          <h2>100%</h2>

          <div>
            <h4>Responsive</h4>

            <p>Works perfectly on mobile, tablet and desktop.</p>
          </div>
        </div>

        <div className="stat">
          <h2>24/7</h2>

          <div>
            <h4>Support</h4>

            <p>Fast support and website maintenance whenever you need.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHome;