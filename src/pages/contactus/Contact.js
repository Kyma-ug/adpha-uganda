import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

import LocationIcon from "./location.svg";
import EmailIcon from "./email.svg";
import PhoneIcon from "./phone.svg";
import SendIcon from "./send.svg";
import LocationMap from "../../components/locationMap/LocationMap";

const Contact = () => {
  return (
    <div className="contact-us-container">
      <div className="hero-section">
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>Reach out, we'd love hearing from you!</p>
        </div>
      </div>

      <div className="contact-page">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="columns">
            <div className="contact-info">
              <motion.h2
                id="what-we-do-title" 
                className="contact-get-in-touch-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Get in touch
              </motion.h2>
              <motion.div 
                className="contact-get-in-touch-dash" 
                aria-hidden="true"
                initial={{  width: 0 , originX: '0%' }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
              </motion.div>
              <div className="contact-item">
                <img src={PhoneIcon} alt="" aria-hidden="true" />
                <div className="contact-item-text-container">
                  <h3>Phone:</h3>
                  <p>+256 (0) 783 818 294 | +256 (0) 800 111 499</p>
                </div>
              </div>
              <div className="contact-item">
                <img src={EmailIcon} alt="" aria-hidden="true" />
                <div className="contact-item-text-container">
                  <h3>Email:</h3>
                  <p>info@adpha-uganda.org</p>
                </div>
              </div>
              <div className="contact-item">
                <img src={LocationIcon} alt="" aria-hidden="true" /> {/* aria-hidden for decorative icons */}
                <div className="contact-item-text-container">
                  <h3>Loction:</h3>
                  <p>Muto Complex, main Floor Room 19, opposite Tropical Bank, Masaka, Uganda</p>
                </div>
              </div>
              
          
            </div>

            <motion.div
              className="contact-form"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2>Have a question?</h2>
              <p>Leave your question here.</p>
              <form> {/* Add onSubmit handler for form submission */}
                <input type="text" placeholder="Your Name" aria-label="Your Name" required /> {/* Added required attribute */}
                <input type="email" placeholder="Your Email" aria-label="Your Email" required /> {/* Added required attribute */}
                <textarea placeholder="Your Message" aria-label="Your Message" required></textarea> {/* Added required attribute */}
                <button type="submit">
                  Send Message
                  <img src={SendIcon} alt="" aria-hidden="true" />
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="map-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <LocationMap />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;