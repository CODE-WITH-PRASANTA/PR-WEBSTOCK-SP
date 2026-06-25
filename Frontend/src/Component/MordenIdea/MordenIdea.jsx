import React from "react";
import "./MordenIdea.css";

import dashboardImg from "../../assets/pr img1.png";

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
          Achieve Results With
          <br />
          Modern Ideas
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
              alt="Dashboard"
              className="mordenidea_dashboard"
            />

            {/* Search Icon */}

            <div className="mordenidea_search">
              <FaSearch />
            </div>

            {/* Floating Overview Card */}

            <div className="mordenidea_overview">

              <div className="progressCircle">
                <span>15%</span>
              </div>

              <div className="overviewText">
                <h4>Overview</h4>
                <p>audience</p>
              </div>

              <FaChevronRight className="overviewArrow" />

            </div>

            {/* Read More */}

            <div className="mordenidea_readmore">

              <span>Read More</span>

              <button>
                <FaChevronDown />
              </button>

            </div>

          </div>

        </div>

        {/* ================= Right ================= */}

        <div className="mordenidea_right">

          <h3>All Your Business Finances</h3>

          <p className="mordenidea_description">
            Nulla id justo nisl. Vestibulum molestie iaculis porttitor.
            Ut vitae vehicula nibh, rhoncus mattis.
          </p>

          <div className="mordenidea_item">

            <h1>01</h1>

            <p>
              Suspendisse rutrum massa quis lacinia consectetur.
              Fusce mattis.
            </p>

          </div>

          <div className="mordenidea_item">

            <h1>02</h1>

            <p>
              Lacinia tortor, sed pharetra ante commodo a.
              Mauris non ipsum ex.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MordenIdea;