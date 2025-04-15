import React from 'react';
import { motion } from 'framer-motion';
import './AdphaReports.css';

// import annualReport from '/adpha-uganda-annual-report-2023.pdf';
import disabilityRights from './skill-aquisition-for-pwds.jpg';
import peerSupport from './peer-support.webp';
import capacitybuilding from './organisaztional-capacity-building.webp';
import advocacy from './advocacy-task-force.webp';


const AdphaReports = ({ reports }) => {

  const defaultReports = reports || [
    { 
      id: 1, 
      title: "ADPHA Uganda Annual Report 2023", 
      summary: "A comprehensive overview of ADPHA Uganda’s impact, initiatives, and progress in 2023.", 
      date: 'Dec 2023', 
      link: '#', 
      image: disabilityRights,
      pdf: '/adpha-uganda-annual-report-2023.pdf'
    },
    { 
      id: 2, 
      title: "COVID-19 Knowledge, Attitude, and Practices Survey", 
      summary: "Insights into public awareness, perceptions, and behaviors regarding COVID-19 in Uganda.", 
      date: 'Dec 2022', 
      link: '#', 
      image: peerSupport,
      pdf: "/covid-19-knowledge-atitude-and-practices-survey.pdf"
    },
    { 
      id: 3, 
      title: "ADPHA Uganda Strategic Plan 2024 – 2029", 
      summary: "A roadmap guiding ADPHA Uganda’s mission, goals, and key initiatives for the next five years.", 
      date: 'Nov 2024', 
      link: '#', 
      image: capacitybuilding,
      pdf: '/adpha-strategic-plan-2024-2029.docx'
    },
    { 
      id: 4, 
      title: 'Accessibility Assessment of Health Services', 
      summary: "An in-depth evaluation of the accessibility of health services for persons with disabilities in Uganda.", 
      date: '23 March 2023', 
      link: '#', 
      image: advocacy,
      pdf: "/madipha-accessibility-assessment-of-health-services-final-report-accessible-format-23-march-2023.pdf"
    },
    
    
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  return (
    <section className="adpha-reports" aria-labelledby="reports-heading">
      <motion.h1 
        id="reports-heading" 
        className="reports-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        ADPHA Reports
      </motion.h1>

      <motion.div
        className="title-dash-reports"
        initial={{  width: 0  }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="reports-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {defaultReports.map((report) => (
          <motion.a
            key={report.id}
            href={report.pdf}
            className="report-card-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-labelledby={`report-title-${report.id}`}
            variants={cardVariants}
            whileHover="hover"
          >
            <article className="report-card" role="article">
              <img
                src={report.image}
                alt={`${report.title} report cover`}
                className="report-image"
                loading="lazy"
              />

              <h2 dangerouslySetInnerHTML={{ __html: report.title }} id={`report-title-${report.id}`} className="report-title" />


              {/* <h2 id={`report-title-${report.id}`} className="report-title">
                {report.title}
              </h2> */}
              <p className="report-summary">{report.summary}</p>
              <time dateTime={report.date} className="report-date">
                {report.date}
              </time>
              <span
                className="report-link"
                aria-label={`Read full report for ${report.title} (opens PDF in new window)`}
              >
                Read Report
              </span>
            </article>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default AdphaReports;