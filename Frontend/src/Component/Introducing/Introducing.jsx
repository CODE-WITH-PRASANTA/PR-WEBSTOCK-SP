import React, { useState } from "react";
import "./Introducing.css";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
const testimonials = [
  {
    id: 1,
    project: "Learning Steps School",
    review:
      "PR WEBSTOCK transformed our vision into a modern school website with an easy-to-use admin panel. The team delivered on time, maintained excellent communication, and provided outstanding support throughout the project.",
    rating: 5,
  },
  {
    id: 2,
    project: "Unique Record of Universe",
    review:
      "The website is fast, responsive, and professionally designed. Every feature was developed according to our requirements, and the overall experience exceeded our expectations.",
    rating: 5,
  },
  {
    id: 3,
    project: "Bright Stars Montessori School",
    review:
      "We wanted a clean and attractive website for parents, and PR WEBSTOCK delivered exactly that. The website is easy to manage, mobile-friendly, and has received excellent feedback from visitors.",
    rating: 5,
  },
  {
    id: 4,
    project: "CloudX Secure",
    review:
      "Their development team created a secure, high-performance website with a premium user interface. The project was completed professionally, and every requirement was handled with great attention to detail.",
    rating: 5,
  },
  {
    id: 5,
    project: "Alisil Technology",
    review:
      "The team demonstrated excellent expertise in React.js, Node.js, and modern web development. The final website is fast, SEO-friendly, and perfectly represents our brand online.",
    rating: 5,
  },
  {
    id: 6,
    project: "Sai Kids Pre School",
    review:
      "From planning to launch, the entire process was smooth and well organized. The website is visually appealing, responsive across all devices, and simple for our staff to update.",
    rating: 5,
  },
  {
    id: 7,
    project: "Our Universe",
    review:
      "PR WEBSTOCK understood our project requirements from day one and delivered a professional website with excellent functionality. Their support after launch has also been exceptional.",
    rating: 5,
  },
  {
    id: 8,
    project: "Alka Drops",
    review:
      "Our product website now has a premium look with fast loading speed and an excellent user experience. We appreciate the team's professionalism, creativity, and commitment to quality.",
    rating: 5,
  },
  {
    id: 9,
    project: "Seasons & Senses",
    review:
      "The website design perfectly reflects our brand identity. Every page is clean, modern, and easy to navigate. We are extremely satisfied with the final result and ongoing technical support.",
    rating: 5,
  },
];

const Introducing = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const paginatedData = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="introducing">
      <div className="introducing-container">
        <div className="left-side">
          <h2>Trusted by Businesses <br /> Across Industries</h2>
          <p>From schools and startups to tech companies, PR WEBSTOCK delivers modern websites that help businesses grow.</p>
          <div className="rating-box">
            <div className="stars"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
            <span className="score">4.9/5 Rating</span>
            <p className="trust-text">Trusted by 50+ Happy Businesses</p>
          </div>
        </div>

        <div className="right-side">
          <div className="testimonial-grid">
            {paginatedData.map((item) => (
              <div className="testimonial-card" key={item.id}>
                <FaQuoteLeft className="quote-icon" />
                <p className="review-text">"{item.review}"</p>
                <div className="card-footer">
                  <div className="stars-review">
                    {[...Array(item.rating)].map((_, i) => <FaStar key={i} className="star" />)}
                  </div>
                  <h4>{item.project}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="pagination-controls">
            <button disabled={currentPage === 0} onClick={() => setCurrentPage(prev => prev - 1)}>
              <FaChevronLeft />
            </button>
            <span>{currentPage + 1} / {totalPages}</span>
            <button disabled={currentPage === totalPages - 1} onClick={() => setCurrentPage(prev => prev + 1)}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introducing;