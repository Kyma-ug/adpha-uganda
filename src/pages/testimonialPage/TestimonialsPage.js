import React from 'react';
import { motion } from 'framer-motion';
import './TestimonialsPage.css';

import juliet from './juliet-nalubwama-mabikke.jpg';
import charles from './charles-musanje.jpg';
import winnie from './winnie-nampita.jpg';
import yiga from './leonard-yiga.jpg';
import damulira from './john-baptist-damulira.jpg';
import john from './john-kasiiba.jpg';
import namyalo from './specioza-namyalo.jpg';
import prossy from './prossy-nangombi.jpg';

const TestimonialsPage = ({ testimonials }) => {
  // Default testimonials if none provided
  const defaultTestimonials = testimonials || [
    { 
      id: 1, 
      name: 'Mr. John Kasiiba', 
      role: 'Program Officer, Rakai Association of Persons with Disabilities living with HIV/AIDS and affected by TB (RADIPHA) ', 
      quote: "ADPHA helped us build strong groups in our sub-counties. These groups are now making sure we get included in everything. We're getting government support, wheelchairs, and even raising funds ourselves. We're finally making a difference.", 
      photo: john,
      isFeatured: true,
    },
    { 
      id: 2, 
      name: 'Ms. Juliet Nalubwama Mabikke', 
      role: 'Beneficiary', 
      quote: 'We were forgetting about HIV/AIDS, but ADPHA Uganda reminded us. They helped us organize, get health services, and even start small businesses.', 
      photo: juliet, 
    },
    { 
      id: 3, 
      name: 'Mr. Charles Musanje', 
      role: 'Beneficiary', 
      quote: "My business was struggling. But with their help, I went from five bunches of bananas to thirty. I'm making much more money and saving for the future.", 
      photo: charles,
    },
    { 
      id: 4, 
      name: 'Mr. Leonard Yiga', 
      role: 'Beneficiary', 
      quote: "For one year, I coughed. I didn't know it was TB. ADPHA came, helped me get tested, and now I'm on treatment. I'm so thankful. The coughing is much less now.", 
      photo: yiga,
    },
    { 
      id: 5, 
      name: 'Ms. Prossy Nangombi', 
      role: 'Chairperson of LWEDIPHA', 
      quote: "ADPHA helped us form LWEDIPHA and reach people in our community. They gave us funds for COVID-19 services, start-up capital for businesses, and training on running our association and managing TB. We're using phones to report TB access issues. We're teaching our members to work hard and live positively. We're also helping them access government programs. Without ADPHA, we'd still be suffering in silence.", 
      photo: prossy,
    },
    { 
      id: 6, 
      name: 'Mr. John Baptist Ddamulira', 
      role: 'Beneficiary', 
      quote: "We used to be left out of all government programs. We had no confidence. ADPHA trained us, and now we're involved in everything. We're getting funding, and even sitting on school boards. The stigma is gone!", 
      photo: damulira,
    },
    { 
      id: 7, 
      name: 'Ms. Specioza Namyalo', 
      role: "Chairperson of the Bukomansimbi Association of persons with disabilities living with HIV/AIDS and those affected by TB (BUDIPHA)", 
      quote: "ADPHA built my leadership skills. Now, as chairperson of BUDIPHA, I'm helping our members access government programs and start businesses. We're educating our leaders about inclusion, and it's working.", 
      photo: namyalo,
    },
    
  ];

  const featuredTestimonial = defaultTestimonials.find(t => t.isFeatured) || defaultTestimonials[0];
  const otherTestimonials = defaultTestimonials.filter(t => t.id !== featuredTestimonial.id);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  return (
    <section className="testimonials-page" aria-labelledby="testimonials-heading">
      <motion.h1 
        className="testimonials-title"
        id="testimonials-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        ADPHA Testimonials
      </motion.h1>

      <motion.div
        className="title-dash-testimonials"
        initial={{  width: 0  }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />

      {/* Featured Testimonial */}
      <motion.article
        className="featured-testimonial"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        role="article"
        aria-labelledby={`featured-name-${featuredTestimonial.id}`}
      >
        <div className="featured-content">
          <blockquote className="featured-quote">
            "{featuredTestimonial.quote}"
          </blockquote>
          <div className="featured-person">
            <img
              src={featuredTestimonial.photo}
              alt={`${featuredTestimonial.name}, ${featuredTestimonial.role}`}
              className="featured-photo"
              loading="lazy"
            />
            <div>
              <h2 id={`featured-name-${featuredTestimonial.id}`} className="featured-name">
                {featuredTestimonial.name}
              </h2>
              <p className="featured-role">{featuredTestimonial.role}</p>
            </div>
          </div>
        </div>
      </motion.article>

      {/* Testimonials Grid */}
      <motion.div
        className="testimonials-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {otherTestimonials.map((testimonial) => (
          <motion.article
            key={testimonial.id}
            className="testimonial-card"
            variants={itemVariants}
            whileHover="hover"
            role="article"
            aria-labelledby={`testimonial-name-${testimonial.id}`}
          >
            <blockquote className="testimonial-quote">
              "{testimonial.quote}"
            </blockquote>
            <div className="testimonial-person">
              <img
                src={testimonial.photo}
                alt={`${testimonial.name}, ${testimonial.role}`}
                className="testimonial-photo"
                loading="lazy"
              />
              <div>
                <h3 id={`testimonial-name-${testimonial.id}`} className="testimonial-name">
                  {testimonial.name}
                </h3>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialsPage;