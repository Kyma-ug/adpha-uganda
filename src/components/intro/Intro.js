import React from "react";
import {  useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import "./Intro.css"; // CSS for the section
import adphaimage from './adpha-2.jpg'

const Intro = () => {

  const navigate = useNavigate();


  return (
    <section className="intro-section">
      <div className="intro-container">
        {/* Text Column */}
        <motion.div
          className="intro-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="intro-title">Transforming Lives, Empowering Futures</h1>
          <p className="intro-description">
          Empowering Persons with Disabilities to live with dignity and equality, championing their rights, and creating inclusive communities.
          </p>
          <div className="button-group">
            <button className="intro-cta primary">Donate Now</button>
            <button className="intro-cta secondary" onClick={() => navigate("/about")}>Learn More</button>
          </div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          className="intro-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={adphaimage}
            alt="Empowering futures"
            className="image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
