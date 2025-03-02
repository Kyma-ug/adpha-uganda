import React from 'react';
import { motion } from 'framer-motion';
import './Careers.css';

const Careers = () => {
  // Array for job opportunities (currently empty)
  const jobOpenings = [
    // Example structure for future use:
    // {
    //   id: 1,
    //   title: 'Community Outreach Coordinator',
    //   description: 'Lead efforts to engage communities and promote inclusive health services.',
    //   requirements: ['Bachelor’s degree in Social Work', '2+ years experience', 'Fluency in Luganda'],
    //   applyLink: '/apply/community-outreach'
    // },
    // Add more jobs here as needed
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <section className="careers" aria-labelledby="careers-title">
      <div className="careers-container">
        <motion.h1
          id="careers-title"
          className="careers-title"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          Careers at ADPHA
        </motion.h1>
        <motion.div
          className="careers-dash"
          initial={{ width: 0 }}
          whileInView={{ width: '100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          aria-hidden="true"
        />

        <motion.p
          className="careers-intro"
          initial="hidden"
          whileInView="visible"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          Join us in transforming lives and empowering futures. At ADPHA Uganda, we seek passionate individuals committed to advocating for inclusive health and support services for persons with disabilities living with HIV or affected by TB.
        </motion.p>

        <div className="careers-content" role="region" aria-live="polite">
          {jobOpenings.length > 0 ? (
            <div className="job-listings">
              {jobOpenings.map((job) => (
                <motion.div
                  key={job.id}
                  className="job-card"
                  initial="hidden"
                  whileInView="visible"
                  variants={cardVariants}
                  viewport={{ once: true }}
                >
                  <h2 className="job-title">{job.title}</h2>
                  <p className="job-description">{job.description}</p>
                  <h3 className="job-requirements-title">Requirements:</h3>
                  <ul className="job-requirements" aria-label={`Requirements for ${job.title}`}>
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                  <a href={job.applyLink} className="job-apply-btn" aria-label={`Apply for ${job.title}`}>
                    Apply Now
                  </a>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="no-openings"
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
            >
              <svg
                className="no-openings-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h2 className="no-openings-title">No Current Openings</h2>
              <p className="no-openings-text">
                We currently have no open positions, but we’re always looking for talent. Check back later or contact us at info@adpha-uganda.org to inquire about future opportunities.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Careers;