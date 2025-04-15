import React from 'react';
import './AboutUsHistorySection.css';
import { motion } from 'framer-motion';
import historyImage from './girl-child-empowerment.jpg';

const AboutUsHistorySection = () => {
  return (
    <section className="about-history-section" id="about-history">
      <div className="about-history-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="about-history-image-container"
        >
          <img
            src={historyImage}
            alt="ADPHA History"
            className="about-history-image"
          />
        </motion.div>
        <div className="about-history-text">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="about-history-title"
          >
            History
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0, originX: '0%' }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            className="about-history-underline"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-history-description"
          >
            The Association of Persons with Disabilities Living with HIV &amp; AIDS (ADPHA) Uganda
            LTD Reg: INDR153453242NB, is an Association of persons with disabilities living with
            HIV/AIDS and affected by Tuberculosis (TB).<br /><br />
            The Association began in 2009 as a community-based organization known as Masaka
            Association of Disabled Persons living with HIV&amp;AIDS (MADIPHA) which transformed
            into a National Non-Government Organization working on the intersection of disability,
            HIV/AIDS, SRHR, TB and other infectious diseases in Uganda after 14 years.
          </motion.p>
        </div>
        
      </div>
    </section>
  );
};

export default AboutUsHistorySection;
