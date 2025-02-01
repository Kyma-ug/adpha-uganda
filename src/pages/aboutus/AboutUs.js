import React from 'react';
import './AboutUs.css'; 

const AboutUsHero = () => {
  return (
    <section aria-labelledby="about-us-title" className="hero">
      <div className="hero-content">

        <h1 id="about-us-title" className="hero-title">About Us</h1>
        <div className="hero-dash" aria-hidden="true"></div>
      </div>
      <div className='overlay'>

      </div>
      {/* <img 
        src="path-to-your-banner-image.jpg" 
        alt="ADPHA - Association of Persons with Disabilities living with HIV" 
        className="hero-image" 
        loading="lazy" // Lazy loading for optimization
      /> */}
    </section>
  );
};

export default AboutUsHero;