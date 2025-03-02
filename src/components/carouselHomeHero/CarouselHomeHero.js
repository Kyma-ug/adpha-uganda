import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CarouselHomeHero.css';

import adphaTeam from './advocating-as-a-team.jpg';
import adphaEvent from './hiv-tb-advocacy.avif';
import skillAcquisition from './skill-aquisition-for-pwds.jpg';
import girlChild from './girl-child-empowerment.jpg';

const carouselItems = [
  {
    id: 1,
    image: adphaTeam,
    title: 'Empowering Disabilities',
    caption: 'Advocating for equal access.',
  },
  {
    id: 2,
    image: adphaEvent,
    title: 'Breaking Barriers',
    caption: 'Inclusive healthcare for all.',
  },
  {
    id: 3,
    image: skillAcquisition,
    title: 'Equity & Inclusion',
    caption: 'Building a stronger community.',
  },
  {
    id: 4,
    image: girlChild,
    title: 'Strategic Partnerships',
    caption: 'Collaborating for impact.',
  },
];

const CarouselHomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="carousel-hero" aria-label="ADPHA Hero Carousel">
      <AnimatePresence initial={false}>
        <motion.div
          key={carouselItems[currentIndex].id}
          className="carousel-slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={carouselItems[currentIndex].image}
            alt={carouselItems[currentIndex].title}
            className="carousel-image"
            loading="lazy"
          />
          <div className="carousel-overlay" />
          <motion.div
            className="carousel-content"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2>{carouselItems[currentIndex].title}</h2>
            <p>{carouselItems[currentIndex].caption}</p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button className="carousel-arrow left" onClick={prevSlide} aria-label="Previous slide">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="carousel-arrow right" onClick={nextSlide} aria-label="Next slide">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="carousel-dots">
        {carouselItems.map((item, index) => (
          <button
            key={item.id}
            className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default CarouselHomeHero;