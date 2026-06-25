import React from "react";
import "./Introducing.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "Vel ornare sed donec ornare blandit volutpat montes. Commodo elit lectus odio.",
    name: "Amanda Barros",
    company: "One Goal",
  },
  {
    id: 2,
    text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Paulette Neufville",
    company: "EvolvePro",
  },
  {
    id: 3,
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
    name: "Raymond Navas",
    company: "Acheron",
  },
];

const Introducing = () => {
  return (
    <section className="introducing">
      <div className="introducing-container">

        <div className="left-side">
          <div className="left-content">

            <h2>
              Introducing innovative ideas
              <br />
              for business
            </h2>

            <p>
              Suspendisse quis tincidunt nisi. Praesent faucibus venenatis
              erat nunc posuere in.
            </p>

            <div className="rating">
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <span className="score">4.95</span>

              <span className="companies">
                Loved by 256 companies
              </span>
            </div>

          </div>
        </div>

        <div className="right-side">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>

              <div className="quote">
                <FaQuoteLeft />
              </div>

              <div className="card-content">
                <h3>{item.text}</h3>

                <div className="author">
                  <h4>{item.name}</h4>
                  <span>{item.company}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Introducing;