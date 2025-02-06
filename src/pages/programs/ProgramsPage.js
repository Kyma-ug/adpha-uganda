import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ProgramsPage.css';




const programsData = [
    {
      title: "Program 1",
      description: "Empowering individuals with disabilities through education.",
      image: "program1.jpg",
      details: "Detailed description of Program 1...",
    },
    {
      title: "Program 2",
      description: "Empowering individuals with disabilities through education.",
      image: "program1.jpg",
      details: "Detailed description of Program 1...",
    },
    {
      title: "Program 3",
      description: "Empowering individuals with disabilities through education.",
      image: "program1.jpg",
      details: "Detailed description of Program 1...",
    },
    {
      title: "Program 4",
      description: "Empowering individuals with disabilities through education.",
      image: "program1.jpg",
      details: "Detailed description of Program 1...",
    },
    {
      title: "Program 5",
      description: "Empowering individuals with disabilities through education.",
      image: "program1.jpg",
      details: "Detailed description of Program 1...",
    },
    {
      title: "Program 6",
      description: "Empowering individuals with disabilities through education.",
      image: "program1.jpg",
      details: "Detailed description of Program 1...",
    },
    // Add 5 more programs...
  ];
  
  const successStories = [
    {
      title: "Story 2",
      description: "How Program 1 changed lives...",
      image: "story1.jpg",
    },
    {
      title: "Story 3",
      description: "How Program 1 changed lives...",
      image: "story1.jpg",
    },
    {
      title: "Story 4",
      description: "How Program 1 changed lives...",
      image: "story1.jpg",
    },
    {
      title: "Story 5",
      description: "How Program 1 changed lives...",
      image: "story1.jpg",
    },
    // Add more success stories...
  ];
  
  const testimonials = [
    {
      quote: "ADPHA's programs have transformed my life.",
      name: "John Doe",
    },
    {
      quote: "ADPHA's programs have transformed my life.",
      name: "John Doe",
    },
    {
      quote: "ADPHA's programs have transformed my life.",
      name: "John Doe",
    },
    {
      quote: "ADPHA's programs have transformed my life.",
      name: "John Doe",
    },
    {
      quote: "ADPHA's programs have transformed my life.",
      name: "John Doe",
    },
    {
      quote: "ADPHA's programs have transformed my life.",
      name: "John Doe",
    },
    // Add more testimonials...
  ];







const ProgramsPage = () => {


    const [activeProgram, setActiveProgram] = useState(null);

    const toggleProgramDetails = (index) => {
    if (activeProgram === index) {
        setActiveProgram(null); // Close if already open
    } else {
        setActiveProgram(index); // Open if closed or different program open
    }
    };





  return (
    <div className="programs-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Our Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Empowering lives through inclusive and impactful initiatives.
          </motion.p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="programs-overview">
        <h2>Explore Our Programs</h2>
        <div className="programs-grid">
          {programsData.map((program, index) => (
            <div key={index} className="program-card">
              <img src={program.image} alt={program.title} />
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <button onClick={() => toggleProgramDetails(index)}>Learn More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Program Details */}
      <section className="program-details">
        {programsData.map((program, index) => (
          <div key={index} className={`program-detail ${activeProgram === index ? 'active' : ''}`}>
            <h3>{program.title}</h3>
            <p>{program.details}</p>
          </div>
        ))}
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <h2>Success Stories</h2>
        <div className="stories-grid">
          {successStories.map((story, index) => (
            <div key={index} className="story-card">
              <img src={story.image} alt={story.title} />
              <h3>{story.title}</h3>
              <p>{story.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What People Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>"{testimonial.quote}"</p>
              <h4>- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Join Us in Making a Difference</h2>
        <p>Your support can change lives. Get involved today!</p>
        <div className="cta-buttons">
          <button>Donate Now</button>
          <button>Volunteer</button>
          <button>Partner With Us</button>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest news and updates.</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="social-media">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default ProgramsPage;