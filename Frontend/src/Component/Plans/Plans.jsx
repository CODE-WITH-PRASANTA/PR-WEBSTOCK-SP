import React, { useState } from "react";
import "./Plans.css";
import { FaCheck, FaTimes } from "react-icons/fa";

const Plans = () => {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      title: "Basic",
      subtitle: "For personal use",
      monthly: 20,
      yearly: 200,
      features: [
        { text: "10 artboards", active: true },
        { text: "Access to all tools", active: true },
        { text: "Unlimited stock photos", active: true },
        { text: "Unlimited stock photos", active: true },
        { text: "Team Space", active: false },
        { text: "Multiple export options", active: false },
      ],
    },
    {
      title: "Team",
      subtitle: "For small teams and companies",
      monthly: 40,
      yearly: 400,
      features: [
        { text: "10 artboards", active: true },
        { text: "Access to all tools", active: true },
        { text: "Unlimited stock photos", active: true },
        { text: "Team space", active: true },
        { text: "Multiple export options", active: true },
        { text: "1 website", active: false },
      ],
    },
    {
      title: "Pro Plan",
      subtitle: "For big teams and companies",
      monthly: 60,
      yearly: 600,
      features: [
        { text: "10 artboards", active: true },
        { text: "Access to all tools", active: true },
        { text: "Unlimited stock photos", active: true },
        { text: "Team space", active: true },
        { text: "Multiple export options", active: true },
        { text: "1 website", active: false },
      ],
    },
  ];

  return (
    <section className="plans-section">
      <div className="plans-header">
        <div className="plans-icon">✧</div>

        <h2>
          Tailored Pricing Plans
          <br />
          Designed For You
        </h2>

        <div className="payment-toggle">
          <span className={!yearly ? "active-text" : ""}>
            Monthly Payment
          </span>

          <div
            className={`toggle-switch ${yearly ? "yearly" : ""}`}
            onClick={() => setYearly(!yearly)}
          >
            <div className="toggle-circle"></div>
          </div>

          <span className={yearly ? "active-text" : ""}>
            Yearly Payment
          </span>
        </div>
      </div>

      <div className="plans-grid">
        {plans.map((plan, index) => (
          <div className="plan-card" key={index}>
            <h3>{plan.title}</h3>

            <p className="plan-subtitle">{plan.subtitle}</p>

            <div className="price-box">
              <span className="price">
                {yearly ? plan.yearly : plan.monthly}$
              </span>

              <span className="month">
                {yearly ? "/Year" : "/Month"}
              </span>
            </div>

            <ul className="features-list">
              {plan.features.map((item, i) => (
                <li key={i}>
                  <span
                    className={`feature-icon ${
                      item.active ? "check" : "cross"
                    }`}
                  >
                    {item.active ? <FaCheck /> : <FaTimes />}
                  </span>

                  {item.text}
                </li>
              ))}
            </ul>

            <button className="purchase-btn">
              Purchase
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;