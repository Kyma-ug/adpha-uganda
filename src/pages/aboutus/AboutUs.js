import React from 'react';
import './AboutUs.css'; 

import WhoWeAreAboutUs from '../../components/whoWeAreAboutUs/whoWeAreAboutUs';

const AboutUsHero = () => {
  return (
    <main>

      <section aria-labelledby="about-us-title" className="hero">
        <div className="hero-content">

          <h1 id="about-us-title" className="hero-title">About Us</h1>
          <div className="hero-dash" aria-hidden="true"></div>
        </div>
        <div className='overlay'>

        </div>
        
      </section>

      <WhoWeAreAboutUs />

      
    </main>
  );
};

export default AboutUsHero;