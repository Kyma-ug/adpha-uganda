import React, { useEffect, useRef, useState } from "react";
import '@fortawesome/fontawesome-free/js/all.js';



import './StatisticsSection.css';

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
      icon: "fa-solid fa-users", // Font Awesome class
    },
    {
      target: 32,
      label: "Programs Delivered",
      icon: "fa-solid fa-hand-holding-heart",
    },
    {
      target: 5,
      label: "Districts Covered",
      icon: "fa-solid fa-map-marked-alt",
    },
    {
      target: 52,
      label: "Partners Engaged",
      icon: "fa-solid fa-handshake",
    },
    {
      target: 9,
      label: "Years of Service",
      icon: "fa-solid fa-clock",
    },
  ];

  return (
    <section
      id="statistics-section"
      className="statistics-section bg-fixed bg-cover"
    >
      <div className="container mx-auto py-12">
        <h2 className="text-center text-3xl font-bold mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="stat-card text-center p-6 rounded-lg bg-white shadow-md"
            >
              {/* Icon */}
              <div className="text-blue-600 text-4xl mb-4">
                <i className={stat.icon}></i>
              </div>

              {/* Counter */}
              <h3
                ref={(el) => (countersRef.current[index] = el)}
                data-target={stat.target}
                className="counter text-4xl font-extrabold text-blue-600"
              >
                0
              </h3>

              {/* Label */}
              <p className="mt-2 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
