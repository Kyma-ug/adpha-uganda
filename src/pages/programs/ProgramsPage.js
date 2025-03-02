import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ProgramsPage.css';
import ProgramsOverview from '../../components/programsOverview/programsOverview';
import AdphaProjects from '../../components/adphaProjects/AdphaProjects';
import AdphaInterventions from '../../components/adphaInterventions/AdphaInterventions';




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
  return (
    <div className="programs-page">
      {/* Hero Section */}
      <section className="hero-section-programs">
        <div className="hero-overlay-programs"></div>
        <div className="hero-content-programs">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
                
          >
            Our Programs
          </motion.h1>
          <div 
          className="hero-dash-programs" 
          aria-hidden="true"
          initial={{ scaleX: 0, originX: '0%' }} 
          whileInView={{ scaleX: 1 }} 
          transition={{ duration: 0.5 }}
          ></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {/* Empowering lives through inclusive and impactful initiatives. */}
          </motion.p>
        </div>
      </section>


      <ProgramsOverview />

      {/* <AdphaProjects /> */}

      <AdphaInterventions />

      
    
      

      

      
    
    </div>
  );
};

export default ProgramsPage