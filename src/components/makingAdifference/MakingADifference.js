import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

import './MakingADifference.css';

import adphacapacity from './adpha-capacity-building.jpg';
import adhphahealth from './adpha-health-engagement.jpg';
import adphapeer from './adpha-peer-support.jpg';





const MakingADifference = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const differenceData = [
    {
      title: 'Empowering Persons with Disabilities',
      description:
        'We raise awareness, educate, and empower persons with disabilities to claim their rights and seek the care they deserve, leaving no one behind.',
      image: adphacapacity, 
      link: 'programs',
      icon: 'fa-hand-holding-heart',

    },
    {
      title: 'Inclusive Healthcare Services',
      description:
        'We train healthcare providers to offer inclusive services, raise awareness about disability, HIV/AIDS, and TB, and equip them with the skills to offer equitable care for persons with disabilities.',
      image: adhphahealth, 
      link: 'programs',
      icon: 'fa-user-md',
    },
    {
      title: 'Advocacy and Awareness',
      description:
        'Through partnerships and campaigns, we advocate for equitable policies, inclusive resource allocation, gender-sensitive solutions, and raise awareness about stigma and discrimination to empower marginalized groups.',
      image: adphapeer, 
      link: 'programs',
      icon: 'fa-bullhorn',
    },
  ];

  return (
    <section className="difference-section">
      <div className="container-making-a-difference">
        <motion.h2 
          className="section-title-making-a-difference"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
            How We’re Making a Difference
        </motion.h2>
        <motion.div
        className="section-title-making-a-difference-dash"
        initial={{  width: 0  }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />
        <div className={`difference-grid ${isVisible ? 'visible-making-a-difference' : ''}`}>
          {differenceData.map((item, index) => (
            <motion.div 
              key={index}
              className="difference-card" 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="image-wrapper-making-a-difference">
                <img src={item.image} alt={item.title} className="card-image-making-a-difference" />
              </div>
              <div className="icon-wrapper-making-a-difference">

                <i className={`fa ${item.icon}`}></i>
                
              </div>
              <div className="card-content-making-a-difference">
                <h3 className="card-title-making-a-difference">{item.title}</h3>
                <p className="card-description-making-a-difference">{item.description}</p>
                  <Link
                      to={`/${item.link.toLowerCase()}`} 
                      // // className="dropdown-link" 
                      className="learn-more-btn-making-a-difference"
                  >
                      Learn More
                </Link>
                  

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MakingADifference;
