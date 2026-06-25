import React from "react";
import "./Analysis.css";
import { FaThLarge } from "react-icons/fa";
import { GiProcessor } from "react-icons/gi";
import demoVideo from "../../assets/v-01.mp4";

const Analysis = () => {
  return (
    <section className="analysis-section">
      <div className="analysis-container">

        {/* Left Video */}
        <div className="analysis-left">
          <div className="video-shadow"></div>

          <div className="video-card">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="analysis-video"
            >
              <source
                src={demoVideo}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right Content */}
        <div className="analysis-right">
          <h2>
            Data analysis tools and
            <br />
            methods for business.
          </h2>

          <p className="analysis-desc">
            Aenean ultrices est convallis bibendum condimentum.
            Ut malesuada pulvinar tincidunt. Aliquam quis quam
            viverra.
          </p>

          <div className="analysis-feature">
            <div className="feature-icon">
              <FaThLarge />
            </div>

            <div className="feature-content">
              <h3>Social network</h3>

              <p>
                Contrary to popular belief, Lorem Ipsum
                is not simply random text.
              </p>
            </div>
          </div>

          <div className="analysis-feature">
            <div className="feature-icon">
              <GiProcessor />
            </div>

            <div className="feature-content">
              <h3>Analytic options</h3>

              <p>
                Contrary to popular belief, Lorem Ipsum
                is not simply random text.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Analysis;