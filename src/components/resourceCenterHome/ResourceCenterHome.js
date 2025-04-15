import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import './ResourceCenterHome.css';

import annualreport from './adpha-annual-report-2023-launch.jpg';
import accessibilityreport from './accessibilty-assesment-of-health-services.jpg';
import strategicplan from './strategic-plan-2024-2029.jpg';
import knowledgesurvey from './knowledge-survey.jpg';


const ResourceCenterHome = () => {
  
    const resources = [
       
        {
            id: 1,
            title: "2024 - 2029 Strategic Plan",
            image: strategicplan,
            document: "/adpha-strategic-plan-2024-2029.docx",
        },
        {
            id: 2,
            title: "Accessibility Assessment of Health Services",
            image: accessibilityreport,
            document: "/madipha-accessibility-assessment-of-health-services-final-report-accessible-format-23-march-2023.pdf",
        },
        {
            id: 3,
            title: "Knowledge, Attitude and Practices Survey",
            image: knowledgesurvey,
            document: "/covid-19-knowledge-atitude-and-practices-survey.pdf",
        },
        {
            id: 4,
            title: "Annual Report 2023",
            image: annualreport,
            document: "/adpha-uganda-annual-report-2023.pdf",
        },
    ]

  const handleClick = (document) => {
    window.open(document, '_blank');
  };

  return (
    <section className="resource-center" aria-labelledby="resource-center-heading">

        <motion.h2
            className="resource-section-title-mobile"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
                Reports
        </motion.h2>

        <motion.div
            className="resource-title-dash-mobile"
            initial={{  width: 0  }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
        />
            
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
      <Link to="/reports" className="read-more-button">
        Read More
      </Link>
      </div>
    </section>
  );
};

export default ResourceCenterHome;