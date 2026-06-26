import React from "react";
import "./Marketing.css";
import { FiArrowUpRight } from "react-icons/fi";

import featured from "../../assets/featured.jpg";
import blog1 from "../../assets/blog 1.png";
import blog2 from "../../assets/blog 2.png";
import blog3 from "../../assets/blog 3.png";
 
const Marketing = () => {
  const blogs = [
    {
      id: 1,
      image: blog1,
      date: "7",
      month: "NOV",
      tag: "IDEAS",
      title: "Pre-Designed Awesome Templates In Seconds",
    },
    {
      id: 2,
      image: blog2,
      date: "7",
      month: "NOV",
      tag: "IDEAS",
      title: "Your Ultimate Tech Business Powerhouse!",
    },
    {
      id: 3,
      image: blog3,
      date: "7",
      month: "NOV",
      tag: "IDEAS",
      title: "Includes A Large Selection Of Curated Images",
    },
  ];

  return (
    <section className="marketing">
      <div className="marketing-wrapper">
        <div className="marketing-heading">
          <h2>
            Secrets of Modern
            <br />
            Marketing Reveald
          </h2>
        </div>

        <div className="marketing-content">
          {/* Left Side Blogs */}
          <div className="marketing-left">
            {blogs.map((blog) => (
              <div className="blog-row" key={blog.id}>
                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />

                  <div className="date-badge">
                    <span>{blog.date}</span>
                    <small>{blog.month}</small>
                  </div>
                </div>

                <div className="blog-info">
                  <span className="blog-tag">{blog.tag}</span>

                  <h3>{blog.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Featured Blog */}
          <div className="marketing-right">
            <div className="featured-card">
              <img src={featured} alt="featured" />

              <div className="date-badge large">
                <span>13</span>
                <small>NOV</small>
              </div>

              <button className="arrow-btn">
                <FiArrowUpRight />
              </button>
            </div>

            <div className="featured-content">
              <span className="blog-tag">SMART</span>

              <h3>
                Career And Education Opportunities –
                Why Have An Online Platform?
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing;