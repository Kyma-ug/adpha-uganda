import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './AdphaProjects.css';

const AdphaProjects = () => {
  const projects = [
    {
      title: 'Membership Empowerment and Livelihoods',
      description: 'We empower our members to sustain their organization by exercising their rights, mobilizing new members, providing emergency support, improving livelihoods, and advocating for inclusion in HIV/TB and government programs.',
      icon: 'https://via.placeholder.com/100x100?text=Empowerment',
    },
    {
      title: 'Inclusive Tuberculosis (TB) Programs',
      description: 'Ensuring TB programs in Uganda are inclusive of people with disabilities, addressing unique barriers, and involving them in design, planning, implementation, and monitoring.',
      icon: 'https://via.placeholder.com/100x100?text=TB',
    },
    {
      title: 'Inclusive HIV Services',
      description: 'Advocating for seven local legislations in Greater Masaka to promote disability-inclusive HIV/TB prevention, ensuring universal access to health services per CRPD Article 25 and SDG 3.',
      icon: 'https://via.placeholder.com/100x100?text=HIV',
    },
    {
      title: 'COVID-19 Responses',
      description: 'Making COVID-19 services, including vaccinations, accessible to all people with disabilities in Greater Masaka, prioritizing their dignity and reducing infection risks.',
      icon: 'https://via.placeholder.com/100x100?text=COVID',
    },
    {
      title: 'Reproductive Health Rights & GBV Prevention',
      description: 'Building confidence and skills among people with disabilities living with HIV/TB to combat stigmatization and access sexual reproductive health services.',
      icon: 'https://via.placeholder.com/100x100?text=Health',
    },
  ];

  const [expanded, setExpanded] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    expanded: { height: 'auto', transition: { duration: 0.4 } },
    collapsed: { height: '100px', transition: { duration: 0.4 } },
  };

  return (
    <section className="adpha-projects" aria-labelledby="projects-heading">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 id="projects-heading" className="projects-title">
          Our Project Interventions
        </h1>
        <p className="projects-subtitle">
          Since 2009, ADPHA-Uganda has partnered globally to amplify the voices of people with disabilities living with HIV and affected by TB.
        </p>
      </motion.div>

      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.article
            key={index}
            className="project-card"
            variants={cardVariants}
            initial="hidden"
            animate={expanded === index ? 'expanded' : 'collapsed'}
            whileHover={{ scale: 1.02 }}
            onClick={() => setExpanded(expanded === index ? null : index)}
            role="button"
            tabIndex={0}
            aria-expanded={expanded === index}
            aria-labelledby={`project-title-${index}`}
            onKeyPress={(e) => e.key === 'Enter' && setExpanded(expanded === index ? null : index)}
          >
            <img src={project.icon} alt={`${project.title} icon`} className="project-icon" />
            <h2 id={`project-title-${index}`} className="project-title">
              {project.title}
            </h2>
            <p className="project-description">{project.description}</p>
          </motion.article>
        ))}
      </motion.div>

      <motion.a
        href="#support"
        className="join-us-btn"
        initial={{ scale: 0.9 }}
        animate={{ scale: [0.9, 1, 0.9], transition: { repeat: Infinity, duration: 2 } }}
        whileHover={{ scale: 1.1 }}
        aria-label="Join us in supporting ADPHA's mission"
      >
        Join Us in Support!
      </motion.a>
    </section>
  );
};

export default AdphaProjects;