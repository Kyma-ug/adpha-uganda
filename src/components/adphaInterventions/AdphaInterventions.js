import React from 'react';
import { motion } from 'framer-motion';
import './AdphaInterventions.css';

import disabilityRights from "./disability-reproductive-rights.webp";
import awareness from "./awareness-creation.webp";
import empowerment from "./digital-empowerment-for-the-disabled.webp";
import adphaevent from './hiv-tb-advocacy.avif';
import vaccination from "./vaccination-of-people-with-disabilities.avif";
import { Link } from 'react-router-dom';


const AdphaInterventions = () => {

    const projects = [
        {
          id: 1,
          title: 'Membership Empowerment and Livelihoods',
          description: "We continuously empower our members to own and sustain their organization through knowing and exercising their rights and obligations, mobilizing new members through peer and emergency support, improving household interventions, participating in leadership and decision-making, and advocating for inclusion in HIV/TB, livelihoods, and government programs.",
          image: empowerment,
        },
        {
          id: 2,
          title: 'Inclusive Tuberculosis (TB) Programs and Services',
          description: 'This project ensures all TB programs and services in Uganda become inclusive of people with disabilities. We recognize disability as a human rights issue in HIV and TB programs, addressing unique barriers to access. People with disabilities affected by TB actively participate in program design, planning, implementation, and monitoring.',
          image: awareness,
        },
        {
          id: 3,
          title: 'Inclusive HIV Services',
          description: 'We strengthen advocacy for implementing seven local legislations promoting disability-inclusive HIV/TB prevention and control in Rakai District and six sub-counties (Kyesiiga, Lukaya, Malongo, Kisseka, Lwengo, Kitanda). The goal is universal access to health services for people with disabilities, aligning with Article 25 of the CRPD and SDG 3.',
          image: adphaevent,
        },
        {
          id: 4,
          title: 'COVID-19 Responses',
          description: 'This project ensures COVID-19 services, including vaccinations in Greater Masaka, are inclusive of people with disabilities—those with physical, mental, intellectual, or sensory impairments, living with HIV/AIDS, or affected by TB. We prioritize access to vaccinations and uphold dignity, human rights, and equity.',
          image: vaccination,
        },
        {
          id: 5,
          title: 'Reproductive Health Rights and GBV Prevention',
          description: 'We build confidence and skills among people with disabilities—women, men, girls, and boys living with HIV or affected by TB—to combat stigmatization and access Sexual Reproductive Health information and services, while preventing Gender-Based Violence.',
          image: disabilityRights,
        },
      ];


    return (
      <section className="adpha-interventions" aria-labelledby="interventions-heading">
        <svg className="background-svg-intervention" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#dfe9f3"
            fillOpacity="0.2"
            d="M0,128L48,138.7C96,149,192,171,288,176C384,181,480,171,576,149.3C672,128,768,96,864,101.3C960,107,1056,149,1152,149.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
  
        <motion.h1 
          id="interventions-heading" 
          className="interventions-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Project Interventions
        </motion.h1>

        <motion.div
        className="project-title-intervention-dash"
        initial={{  width: 0  }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />

        <p className="interventions-intro">
          Since 2009, ADPHA-Uganda has partnered with national and international organizations to amplify the voices of people with disabilities living with HIV and affected by TB at local, national, and global levels.
        </p>
  
        <div className="projects-container-intervention">
          {projects.map((project) => (
            <article key={project.id} className="project-card-intervention" role="article">
              <img
                src={project.image}
                alt={`${project.title} project image`}
                className="project-image-intervention"
                loading="lazy"
              />
              <div className="project-content-intervention">
                <h2 className="project-title-intervention">
                  {project.title}
                </h2>
                <p className="project-description-intervention">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
  
        <div className="cta-section-intervention">
          <p className="cta-text-intervention">
            Join us in supporting the rights of people with disabilities living with HIV and affected by TB. Your contribution has never been more necessary or impactful!
          </p>
          <Link to= "/getinvolved" className="cta-button-intervention" aria-label="Support ADPHA's mission">
            Support Us
          </Link>
        </div>
      </section>
    );
  };
  
  export default AdphaInterventions;


