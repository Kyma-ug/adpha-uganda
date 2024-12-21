import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe-section">
      <div className="subscribe-content">
        <h2>Stay Updated!</h2>
        <p>
          Subscribe to our newsletter and never miss an update about our
          programs, events, and stories of impact.
        </p>
        <form className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email address"
            className="subscribe-input"
            required
          />
          <button type="submit" className="subscribe-button">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
