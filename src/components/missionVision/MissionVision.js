import React from 'react';
import { motion } from "framer-motion";
import './MissionVision.css'; 

const MissionVision = () => {
  return (
    <section aria-labelledby="mission-vision-title" className="mission-vision">
      <div className="parallax-background-mission-vision"></div>
      <div className="mission-vision-content">
        
        <div className="mission-vision-cards">
          <div className="mission-card">
            <div className="card-content-mission-vision">
              <motion.h3 
                className="card-title-mission-vision"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Our Mission
              </motion.h3>
              <motion.div
                className="our-mission-dash"
                aria-hidden="true"
                initial={{ width: 0, originX: "50%" }} 
                whileInView={{ width: "70px", originX: "50%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
               
              >
              </motion.div>
              <p className="card-text-mission-vision">
                “A society where all Persons with Disabilities realize
                their rights without discrimination in HIV/AIDS, SRHR, TB, other infectious diseases
                service delivery and interventions”
              </p>
            </div>
          </div>
          <div className="vision-card">
            <div className="card-content-mission-vision">
              <motion.h3 
                className="card-title-mission-vision"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Our Vision
              </motion.h3>
              <motion.div
                className="our-mission-dash"
                aria-hidden="true"
                initial={{ width: 0, originX: "50%" }} 
                whileInView={{ width: "70px", originX: "50%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
              </motion.div>

              <p className="card-text-mission-vision">
                “Eliminate barriers in service
                delivery and drivers of HIV/AIDS, SRH, TB and other infectious diseases among
                persons with disabilities”.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;