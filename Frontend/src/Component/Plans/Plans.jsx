import React from "react";
import "./Plans.css";
import { FaCheck } from "react-icons/fa";

const Plans = () => {
  const whatsapp = (plan) => {
    const message = encodeURIComponent(
      `Hello PR WEBSTOCK,\n\nI'm interested in the ${plan} package. Please share complete details.`
    );
    window.open(`https://wa.me/917789801327?text=${message}`, "_blank");
  };

  const plans = [
    {
      title: "Single Page Website",
      subtitle: "Perfect for Startups",
      price: "₹7,999",
      tag: "Starting From",
      emi: "EMI starts at ₹1,333/mo",
      features: ["Premium Landing Page", "Mobile Responsive", "WhatsApp Chat Button", "Contact Form", "Basic SEO", "Fast Loading"],
    },
    {
      title: "Multi-Page Website",
      subtitle: "Best for Growing Businesses",
      price: "₹13,999",
      tag: "Starting From",
      popular: true,
      emi: "EMI starts at ₹1,166/mo (12 months)",
      features: ["Up to 10 Custom Pages", "Premium UI Design", "SEO Friendly", "Inquiry Forms", "Google Analytics", "1 Month Support"],
    },
    {
      title: "ERP Solution",
      subtitle: "Complete Management System",
      price: "₹20,999",
      tag: "Starting From",
      emi: "EMI starts at ₹1,750/mo (12 months)",
      features: ["Custom Admin Dashboard", "Employee Management", "Reports & Analytics", "Role-Based Login", "Secure Cloud", "Priority Support"],
    },
  ];

  return (
    <section className="plans-container">
      <div className="plans-header-wrapper">
        <div className="plans-icon-badge">💼</div>
        <h2 className="plans-main-title">
          Choose the Right Website <br />
          Package for Your Business
        </h2>
        <p className="plans-description">
          Affordable pricing with premium quality. Select the perfect website package and start growing your business online today.
        </p>
      </div>

      <div className="plans-cards-grid">
        {plans.map((plan, index) => (
          <div className={`plan-card-item ${plan.popular ? "is-popular" : ""}`} key={index}>
            
            {plan.popular && <div className="popular-status-badge">⭐ Most Popular</div>}

            <h3 className="plan-card-title">{plan.title}</h3>
            <p className="plan-card-subtitle">{plan.subtitle}</p>

            <div className="plan-pricing-wrapper">
              <span className="price-tag-label">{plan.tag}</span>
              <h1 className="plan-price-amount">{plan.price}</h1>
              <p className="plan-emi-highlight">{plan.emi}</p>
            </div>

            <ul className="plan-features-list">
              {plan.features.map((feature, i) => (
                <li key={i} className="feature-item">
                  <FaCheck className="feature-check-icon" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="discuss-cta-button" onClick={() => whatsapp(plan.title)}>
              Discuss With Us
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;