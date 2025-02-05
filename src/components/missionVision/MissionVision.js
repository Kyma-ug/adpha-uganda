import React from 'react';
import './MissionVision.css'; 

const MissionVision = () => {
  return (
    <section aria-labelledby="mission-vision-title" className="mission-vision">
      <div className="parallax-background-mission-vision"></div>
      <div className="mission-vision-content">
        
        <div className="mission-vision-cards">
          <div className="mission-card">
            <div className="card-content-mission-vision">
              <h3 className="card-title-mission-vision">Our Mission</h3>
              <div className="our-mission-dash" aria-hidden="true"></div>
              <p className="card-text-mission-vision">
                Eliminate barriers in service delivery and drivers of HIV/AIDS, TB and other infectious diseases among persons with disabilities.
              </p>
            </div>
          </div>
          <div className="vision-card">
            <div className="card-content-mission-vision">
              <h3 className="card-title-mission-vision">Our Vision</h3>
              <div className="our-mission-dash" aria-hidden="true"></div>
              <p className="card-text-mission-vision">
                A society where all Persons with Disabilities living with and affected by HIV & AIDS, TB, and other infectious diseases realize their rights without discrimination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;