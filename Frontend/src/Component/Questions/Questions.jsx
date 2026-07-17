import React, { useState } from "react";
import "./Questions.css";
import {  FaWhatsapp, FaPlus, FaMinus } from "react-icons/fa";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: "How long does it take to build a website?",
      answer: "A single-page website typically takes 3-5 days, while multi-page business websites are completed within 10-15 days depending on the project complexity.",
    },
    {
      question: "Do you provide website maintenance and support?",
      answer: "Yes, we provide 1 month of free support after the launch. We also offer affordable monthly maintenance plans to ensure your site stays updated and secure.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! We build all our websites with a 'Mobile-First' approach, ensuring they look perfect and perform smoothly on all smartphones, tablets, and desktops.",
    },
    {
      question: "Can you help with SEO?",
      answer: "Yes, we implement basic on-page SEO best practices (meta tags, fast loading speeds, and site structure) to ensure your website is search-engine friendly.",
    },
    {
      question: "What is the payment process?",
      answer: "We typically follow a 50% advance payment to start the project, and the remaining 50% is due upon completion and successful delivery of your website.",
    },
    {
      question: "Do you provide domain and hosting support?",
      answer: "Yes, we can assist you in selecting the right domain name and reliable hosting provider, or even set it up for you as part of our service.",
    },
  ];

  return (
    <section className="questions-section">
      <div className="questions-container">
        <div className="questions-left">
          <h2>Got Questions? <br /> We've Got Answers</h2>
          <p>Everything you need to know about working with PR WEBSTOCK. If you have further questions, feel free to contact us directly.</p>
          
          <div className="social-icons">
            <a href="https://wa.me/917789801327" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="questions-right">
          {faqData.map((item, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
              <button className="faq-question" onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
                <span>{item.question}</span>
                <div className="faq-icon">{activeIndex === index ? <FaMinus /> : <FaPlus />}</div>
              </button>
              <div className={`faq-answer ${activeIndex === index ? "show" : ""}`}>
                <div className="faq-answer-inner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;