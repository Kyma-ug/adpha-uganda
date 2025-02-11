import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './ResourceCenterHome.css';


import annualreport from './annual-report-2024.jpg';
import accessibilityreport from './accessibilty-assesment-of-health-services.jpg';
import strategicplan from './strategic-plan-2024-2029.jpg';
import knowledgesurvey from './knowledge-survey.jpg';



const ResourceCenterHome = () => {
  
    const resources = [
       
        {
            id: 1,
            title: "2024 - 2029 Strategic Plan",
            image: strategicplan,
            document: "/ADPHA_UGANDA_ANNUAL_REPORT_2023.pdf",
        },
        {
            id: 2,
            title: "Accessibility Assessment of Health Services",
            image: accessibilityreport,
            document: "MADIPHA Accessibility Assessment of Health Services Final Report. Accessible Format 23 March 2023.pdf",
        },
        {
            id: 3,
            title: "Knowledge, Attitude and Practices Survey",
            image: knowledgesurvey,
            document: "/Covid 19 -KNOWLEDGE ATITUDE AND PRACTICES Survey.pdf",
        },
        {
            id: 4,
            title: "Annual Report 2024",
            image: annualreport,
            document: "/ADPHA_UGANDA_ANNUAL_REPORT_2023.pdf",
        },
    ]




  const handleClick = (document) => {
    window.open(document, '_blank');
  };

  return (
    <section className="resource-center" aria-labelledby="resource-center-heading">
      <h2 id="resource-center-heading">Resource Center</h2>
      <div className="resources-list">
        {resources.map((resource) => (

            <motion.div
            className="resource-card"
            onClick={() => handleClick(resource.document)}

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:  0.5 }}
            viewport={{ once: true }}
            aria-label={`Open ${resource.title} document`}
            >
                <img src={resource.image} alt={resource.title} className="resource-image" />
                <div className="text-overlay">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        // viewport={{ once: true }}
                    >
                        {resource.title}
                    </motion.h3>
                </div>
            </motion.div>
    
        ))}
      </div>
      <div className="read-more-container">
        <a href="/resources" className="read-more-button">
          Read More
        </a>
      </div>
    </section>
  );
};



export default ResourceCenterHome;