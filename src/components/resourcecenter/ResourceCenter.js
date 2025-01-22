import React from "react";
import "./ResourceCenter.css";

import playstore from './playstore.svg';
import  appstore from './appstore.svg';

const ResourceCenter = () => {
  return (
    <div className="resource-center">
      {/* Resource Center Section */}
      <section className="resource-cards">
        {/* Card 1 */}
        <div className="card card-a">
          <div className="card-overlay"></div>
          <div className="card-title">Resource Title 1</div>
        </div>
        {/* Card 2 */}
        <div className="card card-b">
          <div className="card-overlay"></div>
          <div className="card-title">Resource Title 2</div>
        </div>
        {/* Card 3 */}
        <div className="card card-c">
          <div className="card-overlay"></div>
          <div className="card-title">Resource Title 3</div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="resource-banner">
        <div className="banner-content">
          <img
            src= {appstore}
            alt="Phone"
            className="banner-phone"
          />
          <div className="banner-text">
            <h2>Download OneImpact App</h2>
            <p>Connect with TB support, information, and resources through the free One Impact app.</p>
            <div className="banner-download">
              <img
                src= {playstore}
                alt="Playstore"
                className="playstore-icon"
              />
              <img
                src={appstore} 
                alt="QR Code"
                className="qr-code"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourceCenter;
