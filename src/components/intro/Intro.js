import React from "react";
import {  useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import "./Intro.css"; 
import adphaimage from './adpha-2.jpg'

const Intro = () => {

  const navigate = useNavigate();


  return (
    <section className="intro-section-home">
      <div className="intro-container-home">
        {/* Text Column */}
        <motion.div
          className="intro-text-home"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="intro-title-home">Transforming Lives, Empowering Futures</h1>
          <p className="intro-description-home">
          Empowering Persons with Disabilities to live with dignity and equality, championing their rights, and creating inclusive communities.
          </p>
          <div className="button-group-home">
          <a href="https://www.paypal.com/donate/?cmd=_donations&business=info@adpha-uganda.org&item_name=ADPHA&currency_code=USD" target="_blank" rel="noopener noreferrer">
              <button className="intro-cta-home primary-home">Donate Now</button>
          </a>
            <button className="intro-cta-home secondary-home cta-button-intervention" onClick={() => navigate("/about")}>
              Learn More 
            </button>
          </div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          className="intro-image-home"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={adphaimage}
            alt="Empowering futures"
            className="image-home"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
