import React, { useState } from "react";
import "./Questions.css";
import {
  FaTumblr,
  FaBehance,
  FaYoutube,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: "How To Make An Account With Vertio ?",
      answer:
        "Suspendisse consectetur, nunc eget tempus aliquet, ipsum leo dapibus nunc, ut ornare tortor sapien in nulla. Phasellus libero ligula, cursus vel nisl vitae, aliquam euismod tortor. Curabitur nec lorem erat. Nullam tincidunt erat a erat interdum ornare quis non sem. Quisque massa arcu, viverra ut congue vitae, mattis cursus ipsum.",
    },
    {
      question: "How Too Get Started",
      answer:
        "Getting started is easy. Create your account and start exploring all available features available on the platform.",
    },
    {
      question: "Where To Get Resources?",
      answer:
        "Resources are available through our documentation, tutorials, community forums, and support center.",
    },
    {
      question: "How To Give Feedback?",
      answer:
        "You can submit feedback using our support form, contact page, or directly through your dashboard.",
    },
    {
      question: "How To Make An Account With Vertio?",
      answer:
        "Sign up with your email address, verify your account, and begin using all platform features.",
    },
    {
      question: "What Is Your Privacy Policy?",
      answer:
        "We take privacy seriously and protect all user information according to our privacy standards.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="questions-section">
      <div className="questions-container">
        {/* Left Side */}
        <div className="questions-left">
          <h2>Got Questions?</h2>

          <p>
            Praesent in odio auctor, pretium purus a, dictum metus.
            Duis cursus maximus risus vel pharetra.
          </p>

          <div className="social-icons">
            <a href="/">
              <FaTumblr />
            </a>

            <a href="/">
              <FaBehance />
            </a>

            <a href="/">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="questions-right">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                <span>{item.question}</span>

                <div className="faq-icon">
                  {activeIndex === index ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )}
                </div>
              </button>

              <div
                className={`faq-answer ${
                  activeIndex === index ? "show" : ""
                }`}
              >
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