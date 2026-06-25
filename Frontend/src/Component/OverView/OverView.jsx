import React from "react";
import "./OverView.css";

import analyticsOne from "../../assets/main-home-img-6.jpg";
import analyticsTwo from "../../assets/main-home-img-5.jpg";

import { FaCheck, FaArrowRight } from "react-icons/fa";

const OverView = () => {
  const features = [
    "Analytics options",
    "100+ resources",
    "Audience growth",
    "New resolutions",
    "Pre-made templates",
    "Business Projects",
  ];

  return (
    <section className="overview">
      <div className="overview_container">

        {/* Left Images */}

        <div className="overview_images">

          <div className="overview_image_box">
            <img
              src={analyticsOne}
              alt="Analytics"
              className="overview_img"
            />
          </div>

          <div className="overview_image_box">
            <img
              src={analyticsTwo}
              alt="Chart"
              className="overview_img"
            />
          </div>

        </div>

        {/* Right Content */}

        <div className="overview_content">

          <h2>
            Change your company image
            <br />
            with our help
          </h2>

          <p>
            Nam lorem libero, sodales sed ullamcorper eu, pharetra vitae
            nibh. Nulla condimentum felis.
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

          <button className="overview_btn">
            View More
            <FaArrowRight />
          </button>

        </div>

      </div>
    </section>
  );
};

export default OverView;