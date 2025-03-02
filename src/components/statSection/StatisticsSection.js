import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';

import './StatisticsSection.css';
import ugandacoverage from './uganda-coverage.svg';
import yearsofservice from './years-of-service.svg';
import peoplereached from './vulnerable-people-reached.svg';
import programsdelivered from './disability-programs-delivered.svg';


const StatisticsSection = () => {
  const countersRef = useRef([]);
  const [startAnimation, setStartAnimation] = useState(false);

  // Observer to trigger the animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const section = document.querySelector("#statistics-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    countersRef.current.forEach((counter) => {
      let count = 0;
      const target = +counter.dataset.target; // Get target number
      const increment = Math.ceil(target / 100); // Adjust this for smoother/slower increment

      const updateCounter = () => {
        count += increment;
        if (count >= target) {
          counter.innerText = target;
        } else {
          counter.innerText = count;
          setTimeout(updateCounter, 50); // Adjust delay for speed
        }
      };

      updateCounter();
    });
  }, [startAnimation]);

  const statistics = [
    {
      target: 15000,
      label: "People Reached",
      icon: peoplereached,
      plus: " +"
    },
    {
      target: 32,
      label: "Programs Delivered",
      icon: programsdelivered,
      plus: ""
    },
    {
      target: 10,
      label: "Districts Covered",
      icon: ugandacoverage,
      plus: ""
    },
    {
      target: 16,
      label: "Years of Service",
      icon: yearsofservice,
      plus: ""
    },
  ];

  return (
    <section id="statistics-section" className="statistics-section">
      <div className="statistics-container">


      <motion.h2
        className="our-impact-home-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Impact
      </motion.h2>

      <motion.div
        className="our-impact-home-dash"
        initial={{  width: 0  }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />

        <div className="statistics-grid">
          {statistics.map((stat, index) => (
            <motion.div 
              key={index} 
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              >
              <div className="stat-icon">
                
                <img src={stat.icon} alt={`${stat.title} icon`} className="icon-wrapper-stats" />
                
              </div>
              <div id="aligning-plus">
                <h3
                  ref={(el) => (countersRef.current[index] = el)}
                  data-target={stat.target}
                  className="stat-value counter"
                >
                  0
                </h3>
                <span  className="stat-value">{stat.plus}</span>
              </div>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
