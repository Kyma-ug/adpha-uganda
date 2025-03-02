import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: '',
      role: 'Community Member',
      quote: 'We were forgetting about HIV/AIDS, but ADPHA Uganda reminded us. They helped us organize, get health services, and even start small businesses.',
      photo: 'https://via.placeholder.com/150x150?text=Sarah',
    },
    {
      id: 2,
      name: 'Joseph Mukasa',
      role: 'TB Survivor',
      quote: 'Thanks to ADPHA’s advocacy, I accessed treatment that respected my dignity as a person with a disability.',
      photo: 'https://via.placeholder.com/150x150?text=Joseph',
    },
    {
      id: 3,
      name: 'Grace Akello',
      role: 'Volunteer',
      quote: 'Working with ADPHA opened my eyes to the power of inclusion. It’s been an inspiring journey.',
      photo: 'https://via.placeholder.com/150x150?text=Grace',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000); // Rotate every 5 seconds
    return () => clearInterval(interval);
  }, [testimonialsData.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const testimonialVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
  };

  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials-container">
        <motion.h1
          id="testimonials-title"
          className="testimonials-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.h1>
        <motion.div
          className="testimonials-dash"
          initial={{ width: 0 }}
          whileInView={{ width: '100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          aria-hidden="true"
        />

        <div className="testimonials-content" role="region" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialsData[currentIndex].id}
              className="testimonial-highlight"
              variants={testimonialVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="article"
              aria-labelledby={`testimonial-name-${testimonialsData[currentIndex].id}`}
            >
              <div className="testimonial-photo-wrapper">
                <img
                  src={testimonialsData[currentIndex].photo}
                  alt={`${testimonialsData[currentIndex].name}, ${testimonialsData[currentIndex].role}`}
                  className="testimonial-photo"
                />
              </div>
              <blockquote className="testimonial-quote">
                "{testimonialsData[currentIndex].quote}"
              </blockquote>
              <cite className="testimonial-cite">
                <h2
                  id={`testimonial-name-${testimonialsData[currentIndex].id}`}
                  className="testimonial-name"
                >
                  {testimonialsData[currentIndex].name}
                </h2>
                <p className="testimonial-role">{testimonialsData[currentIndex].role}</p>
              </cite>
            </motion.div>
          </AnimatePresence>

          <div className="testimonials-dots" role="navigation" aria-label="Testimonial navigation">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`View testimonial ${index + 1} of ${testimonialsData.length}`}
                aria-pressed={currentIndex === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;