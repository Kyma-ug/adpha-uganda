import React from "react";
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
        Resource Center
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
          onClick={() => window.open("/ADPHA_UGANDA_ANNUAL_REPORT_2023.pdf", "_blank")}
        >
          <div className="card-overlay"></div>
          <div className="card-title">2024 - 2029 Strategic Plan</div>
        </div>
        {/* Card 2 */}
        <div className="card card-b"
          onClick={() => window.open("/MADIPHA Accessibility Assessment of Health Services Final Report. Accessible Format 23 March 2023.pdf", "_blank")}
        >
          <div className="card-overlay"></div>
          <div className="card-title">Accessibility Assessment of Health Services</div>
        </div>
        {/* Card 3 */}
        <div className="card card-c"
          onClick={() => window.open("/Covid 19 -KNOWLEDGE ATITUDE AND PRACTICES Survey.pdf", "_blank")}
        >
          <div className="card-overlay"></div>
          <div className="card-title">2024 Annual Report</div>
        </div>
      </section>

      {/* Banner Section */}
      {/* <section className="resource-banner">
        <div className="banner-content">
          <img
            src= {appstore}
            alt="Phone"
            className="banner-phone"
          />
          <div className="banner-text">
            <h2>Download the OneImpact App</h2>
            <p>Connect with TB support, information, and resources through the free One Impact app.</p>
            <div className="banner-download">
              <img
                src= {playstore}
                alt="Playstore"
                className="playstore-icon"
              />
              <img
                src={appstore} 
                alt="QR Code"
                className="qr-code"
              />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ResourceCenter;
