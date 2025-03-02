import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './CarouselPartners.css';

import addlogo from './add-international-logo.png';
import tag from './treatment-action-group.png';
import voice from './voice-uganda-logo.png';
import amplify from './amplify-change-logo.png';
import viiv from './viiv-healthcare-logo.png';
import dfhug from './dhf-uganda.png';
import drf from './disability-rights-fund-logo.png';
import nerve from './nerve-logo.png';
import frontline from './frontline-aids-logo.png';
import agilityfund from './pva-agility-fund-logo.png';
import stoptbpartnership from './stop-tb-by-unops-logo.png';


const partnersData = [
  { id: 1, name: 'ADD International', logo: addlogo, website: 'https://add.org.uk/madipha/' },
  { id: 2, name: 'The Stop TB Partnership', logo: stoptbpartnership, website: 'https://www.stoptb.org/' },
  { id: 3, name: 'Amplify Change', logo: amplify, website: 'https://amplifychange.org/' },
  { id: 4, name: 'The Disability Rights Fund', logo: drf, website: 'https://www.disabilityrightsfund.org/' },
  { id: 5, name: 'PVA Agility Fund', logo: agilityfund, website: 'https://peoplesmedicines.org/resources/agility-fund/' },
  { id: 6, name: 'Frontline AIDS', logo: frontline, website: 'https://frontlineaids.org/' },
  { id: 7, name: 'Treatment Action Group', logo: tag, website: 'https://www.treatmentactiongroup.org/resources/tagline/tagline-november-2024/breaking-barriers-ensuring-access-to-disability-inclusive-tb-and-hiv-services/' },
  { id: 8, name: 'DHF Uganda', logo: dfhug, website: 'https://x.com/DhfUganda' },
  { id: 9, name: 'We Got Nerve', logo: nerve, website: 'https://www.wegotnerve.com/' },
  { id: 10, name: 'VIIV Health Care', logo: viiv, website: 'https://viivhealthcare.com/' },
  { id: 11, name: 'Voice Uganda', logo: voice, website: 'https://voiceuganda.com/' },
  
];

const CarouselPartners = ({ partners = partnersData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const itemsPerPage = 3; // Always show 3 items
  const totalItems = partners.length;

  // Duplicate partners for infinite scroll
  const infinitePartners = [...partners, ...partners];

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll handling
  useEffect(() => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth / itemsPerPage;
      const scrollPosition = (currentIndex % totalItems) * itemWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [currentIndex, totalItems]);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="carousel-partners" aria-label="Our Partners Carousel">
      <motion.h2
        className="partners-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Partners
      </motion.h2>
      <motion.div
        className="title-dash-partners"
        initial={{ width: 0 }}
        whileInView={{ width: '100px' }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />

      <div className="carousel-wrapper-partners">
        <button className="carousel-btn-partners prev-partners" onClick={prevSlide} aria-label="Previous partners">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <motion.div
          className="carousel-track-partners"
          ref={carouselRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {infinitePartners.map((partner, index) => (
            <motion.a
              key={`${partner.id}-${index}`}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="carousel-item-partners"
              
            >
              <img src={partner.logo} alt={`${partner.name} logo`} loading="lazy" />
            </motion.a>
          ))}
        </motion.div>

        <button className="carousel-btn-partners next-partners" onClick={nextSlide} aria-label="Next partners">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="carousel-dots-partners">
        {partners.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot-partners ${currentIndex % totalItems === index ? 'active-partners' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to partner set ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default CarouselPartners;