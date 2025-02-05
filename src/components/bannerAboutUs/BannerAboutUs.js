import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa"; 
import "./BannerAboutUs.css";

const BannerAboutUs = () => {
  return (
    <section className="banner-about-us">
      <div className="banner-content-about-us">
        <motion.h2
          className="banner-title-about-us"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Work With Us
        </motion.h2>

        <motion.div
            className="banner-title-about-us-dash"
            initial={{  width: 0  }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
        />

        <motion.p
          className="banner-description-about-us"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Join our mission to create a more inclusive and empowered society. At ADPHA, we are dedicated to supporting persons with disabilities living with HIV. Together, we can make a difference.
        </motion.p>
        <motion.button
          className="contact-button-about-us"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
        >
          Contact Us <FaArrowRight className="arrow-icon-about-us" />
        </motion.button>
      </div>
    </section>
  );
};

export default BannerAboutUs;