import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
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
      link: '/empowering-persons-with-disabilities',
      icon: 'fa-hand-holding-heart',

    },
    {
      title: 'Inclusive Healthcare Services',
      description:
        'We train healthcare providers to offer inclusive services, raise awareness about disability, HIV/AIDS, and TB, and equip them with the skills to offer equitable care for persons with disabilities.',
      image: adhphahealth, 
      link: '/inclusive-healthcare-services',
      icon: 'fa-user-md',
    },
    {
      title: 'Advocacy and Awareness',
      description:
        'Through partnerships and campaigns, we advocate for equitable policies, inclusive resource allocation, gender-sensitive solutions, and raise awareness about stigma and discrimination to empower marginalized groups.',
      image: adphapeer, 
      link: '/advocacy-and-awareness',
      icon: 'fa-bullhorn',
    },
  ];

  return (
    <section className="difference-section">
      <div className="container">
        <h2 className="section-title">How We’re Making a Difference</h2>
        <div className={`difference-grid ${isVisible ? 'visible' : ''}`}>
          {differenceData.map((item, index) => (
            <div className="difference-card" key={index}>
              <div className="image-wrapper">
                <img src={item.image} alt={item.title} className="card-image" />
              </div>
              <div className="icon-wrapper">

                <i className={`fa ${item.icon}`}></i>
                
                {/* <i className="fa fa-globe"></i> */}
              </div>
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
                <a href={item.link} className="learn-more-btn">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MakingADifference;
