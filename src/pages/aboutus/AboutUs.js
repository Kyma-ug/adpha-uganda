import React from 'react';

import { motion } from 'framer-motion';

import './AboutUs.css'; 


import WhoWeAreAboutUs from '../../components/whoWeAreAboutUs/whoWeAreAboutUs';
import MissionVision from '../../components/missionVision/MissionVision';
import WhyChooseUs from '../../components/whychooseus/WhyChooseUs';
import CoreValues from '../../components/coreValues/CoreValues';
import TeamCarousel from '../../components/teamCarousel/TeamCarousel';
import BannerAboutUs from '../../components/bannerAboutUs/BannerAboutUs';
import AboutUsHistorySection from '../../components/historySection/AboutUsHistorySection';

const AboutUsHero = () => {
  return (
    <main>

      <section aria-labelledby="about-us-title" className="hero-about">
        <div className="hero-content-about">

          <motion.h1 
          id="about-us-title" 
          className="hero-title-about"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h1>
          <div 
          className="hero-dash-about" 
          aria-hidden="true"
          initial={{ scaleX: 0, originX: '0%' }} 
          whileInView={{ scaleX: 1 }} 
          transition={{ duration: 0.5 }}
          ></div>
        </div>
        <div className='overlay-about'>

        </div>
        
      </section>

      <WhoWeAreAboutUs />
      <AboutUsHistorySection />
      <MissionVision />
      <CoreValues />
      <WhyChooseUs />
      <TeamCarousel />
      <BannerAboutUs />

      
    </main>
  );
};

export default AboutUsHero;