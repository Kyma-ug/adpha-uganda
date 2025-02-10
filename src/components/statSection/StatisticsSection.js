import React, { useEffect, useRef, useState } from "react";
import '@fortawesome/fontawesome-free/js/all.js';


import './StatisticsSection.css';
import partnership from './partnership.svg';
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
    },
    {
      target: 32,
      label: "Programs Delivered",
      icon: programsdelivered,
    },
    {
      target: 10,
      label: "Districts Covered",
      icon: ugandacoverage,
    },
    {
      target: 52,
      label: "Partners Engaged",
      icon: partnership,
    },
    {
      target: 9,
      label: "Years of Service",
      icon: yearsofservice,
    },
  ];

  return (
    <section id="statistics-section" className="statistics-section">
      <div className="statistics-container">
        <h2 className="statistics-title">Our Impact</h2>
        <div className="statistics-grid">
          {statistics.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                {/* Render your custom SVG icon here */}
                <img src={stat.icon} alt={`${stat.title} icon`} className="icon-wrapper-stats" />
                {/* {stat.icon} */}
              </div>
              <h3
                ref={(el) => (countersRef.current[index] = el)}
                data-target={stat.target}
                className="stat-value counter"
              >
                0
              </h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
