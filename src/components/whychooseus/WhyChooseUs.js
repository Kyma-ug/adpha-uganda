import React from 'react';
import './WhyChooseUs.css';
import { motion } from 'framer-motion';
import whyChooseUsImage from './ADPHA_Outreach.avif';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us" id="why-choose-us">
      <div className="container">
        <div className="content">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="title"
          >
            Why Choose Us
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0, originX: '0%' }} 
            whileInView={{ scaleX: 1 }} 
            transition={{ duration: 0.5 }}
            className="title-underline"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="description"
          >
            ADPHA Uganda unites people with disabilities at the intersection of disability, HIV/AIDS, and tuberculosis (TB) in Uganda. We connect individuals and their families to vital healthcare services, integrate marginalized people into peer support groups, and empower them to participate in HIV and TB program design. Our advocacy ensures that the rights of people living with disabilities, TB, and HIV are recognized, addressing healthcare, social, and economic barriers.
          </motion.p>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
          // className="image-container"
        >
          <img src={whyChooseUsImage} alt="Why Choose Us - ADPHA Uganda" className="image" />
          {/* <div className="image-background-why"></div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
