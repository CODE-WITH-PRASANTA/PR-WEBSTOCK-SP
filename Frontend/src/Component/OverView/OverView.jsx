import React from "react";
import "./OverView.css";

import analyticsOne from "../../assets/WORDPRESS.webp";
import analyticsTwo from "../../assets/MERN.webp";

import { FaCheck, FaArrowRight } from "react-icons/fa";

const OverView = () => {

  const whatsappMessage = encodeURIComponent(
    "Hello PR WEBSTOCK,\n\nI would like to know more about your Website Development services. Please share the complete details."
  );

  const features = [
    "Custom MERN Stack Development",
    "React.js & Node.js Applications",
    "MongoDB Database Solutions",
    "WordPress Business Websites",
    "Responsive & SEO Friendly Design",
    "Affordable Pricing Across India",
  ];

  return (
    <section className="overview">

      <div className="overview_container">

        {/* Left Images */}

        <div className="overview_images">

          <div className="overview_image_box">
            <img
              src={analyticsOne}
              alt="MERN Stack Development"
              className="overview_img"
            />
          </div>

          <div className="overview_image_box">
            <img
              src={analyticsTwo}
              alt="Website Development"
              className="overview_img"
            />
          </div>

        </div>

        {/* Right Content */}
{/* Right Content */}

<div className="overview_content">

  <h2>
    Best Website Development
    <br />
    Company in Bhubaneswar
  </h2>

  <p>
    PR WEBSTOCK builds modern, fast and mobile-friendly websites for
    businesses of all sizes. We create professional websites that help
    you grow your business, attract more customers and build your brand
    online at an affordable price.
  </p>

  <div className="overview_list">

    {features.map((item, index) => (

      <div className="overview_item" key={index}>

        <span>
          <FaCheck />
        </span>

        {item}

      </div>

    ))}

  </div>

  <a
    href={`https://wa.me/917789801327?text=${whatsappMessage}`}
    target="_blank"
    rel="noopener noreferrer"
    className="overview_btn"
  >
    Know More
    <FaArrowRight />
  </a>

</div>

      </div>

    </section>
  );
};

export default OverView;