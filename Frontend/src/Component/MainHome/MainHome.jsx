import React from "react";
import "./MainHome.css";
import { FaPlay } from "react-icons/fa";

import officeImg from "../../assets/ChatGPT Image Jun 23, 2026, 06_03_52 PM.png";

const MainHome = () => {
  return (
    <section className="mainhome">
      <div className="mainhome_container">

        {/* ================= LEFT ================= */}

        <div className="mainhome_left">

          <span className="mainhome_tag">
            BUSINESS SOLUTION
          </span>

          <h1>
            The best solution
            <br />
            for your business
          </h1>

          <p>
            Aenean molestie auctor est, ac condimentum arcu.
            Vestibulum facilisis ex felis, eget gravida sem
            vulputate in.
          </p>

          <p>
            Vestibulum laoreet pharetra ultricies mauris.
          </p>

          <div className="mainhome_buttons">

            <button className="start_btn">
              Start Now
            </button>

            <button className="view_btn">
              View More
            </button>

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="mainhome_right">

          {/* Image */}

          <img
            src={officeImg}
            alt="Office"
            className="office_img"
          />

          {/* Floating Play Box */}

          <div className="play_wrapper">

            <div className="rotate_circle">

              <svg viewBox="0 0 200 200">

                <defs>
                  <path
                    id="circlePath"
                    d="
                      M100,100
                      m-70,0
                      a70,70 0 1,1 140,0
                      a70,70 0 1,1 -140,0
                    "
                  />
                </defs>

                <text>
                  <textPath
                    href="#circlePath"
                    startOffset="0%"
                  >
                    • DISTRIBUTED • DESIGN • DISTRIBUTED • DESIGN •
                  </textPath>
                </text>

              </svg>

              <div className="play_button">

                <FaPlay />

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= STATS ================= */}

      <div className="mainhome_stats">

        <div className="stat">

          <h2>10k</h2>

          <div>

            <h4>Daily Users</h4>

            <p>Lorem ipsum dolor sit amet</p>

          </div>

        </div>

        <div className="stat">

          <h2>99%</h2>

          <div>

            <h4>Downloads</h4>

            <p>Lorem ipsum dolor sit amet</p>

          </div>

        </div>

        <div className="stat">

          <h2>543</h2>

          <div>

            <h4>Projects</h4>

            <p>Lorem ipsum dolor sit amet</p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MainHome;