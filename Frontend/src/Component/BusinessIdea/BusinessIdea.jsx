import React from "react";
import "./BusinessIdea.css";

import businessImg from "../../assets/bus img.jpg"; // Your Image

import {
  FaChartLine,
  FaLayerGroup,
  FaArrowRight,
} from "react-icons/fa";

const BusinessIdea = () => {
  return (
    <section className="businessidea">

      <div className="businessidea_container">

        {/* LEFT */}

        <div className="businessidea_left">

          <div className="businessidea_box">

            <div className="businessidea_icon">
              <FaChartLine />
            </div>

            <div>
              <h2>Transform business</h2>

              <p>
                Etiam malesuada fringilla tempus. Curabitur finibus
                vulputate odio vitae imperdiet. Nulla id justo nisl.
                Vestibulum molestie.
              </p>
            </div>

          </div>

          <div className="businessidea_box">

            <div className="businessidea_icon">
              <FaLayerGroup />
            </div>

            <div>
              <h2>Smart Integration</h2>

              <p>
                Nulla id justo nisl. Vestibulum molestie iaculis
                porttitor. Ut vitae vehicula nibh, rhoncus mattis purus
                vitae imperdiet.
              </p>
            </div>

          </div>

          <button className="businessidea_btn">
            Start Now
            <FaArrowRight />
          </button>

        </div>

        {/* RIGHT */}

        <div className="businessidea_right">

          <img
            src={businessImg}
            alt="Business"
            className="businessidea_image"
          />

          <div className="businessidea_card">

            <div className="businessidea_card_top">

              <div>
                <span>ALL MONTH</span>
                <h2>$3500</h2>
              </div>

              <div className="businessidea_total">
                <h3>Total</h3>
                <h3>Amount</h3>
              </div>

            </div>

            <div className="businessidea_card_bottom">

              <p>
                Lorem ipsum dolor sit amet,
                consectetur.
              </p>

              <div className="businessidea_number">
                5
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BusinessIdea;