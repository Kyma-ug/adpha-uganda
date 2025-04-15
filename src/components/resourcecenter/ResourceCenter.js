import React from "react";
import { Link } from "react-router-dom";

import { motion } from 'framer-motion';
import "./ResourceCenter.css";


// import playstore from './playstore.svg';
// import  appstore from './appstore.svg';

const ResourceCenter = () => {
  return (
    <div className="resource-center">
  
      <motion.h2
        className="resource-section-title-desktop"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Reports
      </motion.h2>

      <motion.div
        className="resource-title-dash-desktop"
        initial={{  width: 0  }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />
      <section className="resource-cards">
        {/* Card 1 */}
        <div className="card card-a"
          onClick={() => window.open("/adpha-strategic-plan-2024-2029.docx", "_blank")}
        >
          <div className="card-overlay"></div>
          <div className="card-title">2024 - 2029 Strategic Plan</div>
        </div>
        {/* Card 2 */}
        <div className="card card-b"
          onClick={() => window.open("/madipha-accessibility-assessment-of-health-services-final-report-accessible-format-23-march-2023.pdf", "_blank")}
        >
          <div className="card-overlay"></div>
          <div className="card-title">Accessibility Assessment of Health Services</div>
        </div>
        {/* Card 3 */}
        <div className="card card-c"
          onClick={() => window.open("/covid-19-knowledge-atitude-and-practices-survey.pdf", "_blank")}
        >
          <div className="card-overlay"></div>
          <div className="card-title">2024 Annual Report</div>
        </div>
      </section>
      <Link to="/reports">
        <button className="reports-lg-cta-home">Read More</button>
      </Link>

      
    </div>
  );
};

export default ResourceCenter;
