import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CarouselHomeHero.css";



import adphaTeam from './advocating-as-a-team.jpg';
import adphaevent from './hiv-tb-advocacy.avif';
import skillaquisition from './skill-aquisition-for-pwds.jpg';
import girlchild from './girl-child-empowerment.jpg';


// Carousel data
const carouselItemsHomeHero = [
    {
        id: 1,
        image: adphaTeam,
        title: "Empowering Persons with Disabilities",
        description: "We advocate for <strong>equal access</strong> to healthcare, education, and social services for persons with disabilities living with HIV & AIDS and those affected by TB.",
        link: "",
    },
    {
      id: 2,
      image: adphaevent,
      title: "Our Mission: Breaking Barriers in Healthcare",
      description: `
        <p>ADPHA Uganda is committed to removing barriers in the healthcare system, ensuring <strong>equal access to HIV & AIDS and TB services</strong> for persons with disabilities.</p>
        <blockquote>“A society where all are treated with dignity and respect.”</blockquote>
      `,
      link: "",
    },

    {
      id: 3,
      image: skillaquisition,
      title: "Our Core Values: Equity, Inclusion, and Community",
      description: `
        <p>At ADPHA Uganda, we stand for:</p>
        <ul>
          <li><strong>Equity & Inclusion</strong> – No one should be left behind.</li>
          <li><strong>Transparency & Accountability</strong> – Trust is our foundation.</li>
          <li><strong>Respect & Empathy</strong> – Compassion drives change.</li>
        </ul>
        <p>Be part of a movement that values dignity for all!</p>
      `,
      link: "",
    },

    {
      id: 4,
      image: girlchild,
      title: "Strategic Partnerships for Greater Impact",
      description: `
        <p>Collaboration is key! ADPHA Uganda works with <strong>local and international partners</strong> to expand access to healthcare, strengthen community support, and amplify advocacy efforts.</p>
        <p><em>Want to partner with us? Let’s build an inclusive future together!</em></p>
      `,
      link: "",
    },
  

];

const CarouselHomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItemsHomeHero.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once on mount

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItemsHomeHero.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItemsHomeHero.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container-home-hero">
      {/* Carousel Items */}
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={carouselItemsHomeHero[currentIndex].id}
          className="carousel-item-home-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={carouselItemsHomeHero[currentIndex].image}
            alt={carouselItemsHomeHero[currentIndex].title}
            className="carousel-image-home-hero"
          />
          {/* Gradient Overlay */}
          <div className="gradient-overlay-home-hero"></div>
          {/* Text Content */}
          <motion.div
            className="carousel-text-home-hero"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h2>{carouselItemsHomeHero[currentIndex].title}</h2>
            <p dangerouslySetInnerHTML={{ __html: carouselItemsHomeHero[currentIndex].description }} />
            {/* <p>{carouselItemsHomeHero[currentIndex].description}</p> */}
            <a href={carouselItemsHomeHero[currentIndex].link}>Learn More</a>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button className="carousel-arrow-home-hero left-home-hero" onClick={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button className="carousel-arrow-home-hero right-home-hero" onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="carousel-dots-home-hero">
        {carouselItemsHomeHero.map((item, index) => (
          <button
            key={item.id}
            className={`carousel-dot-home-hero ${currentIndex === index ? "active-home-hero" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselHomeHero;