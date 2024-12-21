import React from "react";
import "./ResourceCenter.css";

const ResourceCenter = () => {
  return (
    <div className="resource-center">
      {/* Resource Center Section */}
      <section className="resource-cards">
        {/* Card 1 */}
        <div className="card">
          <div className="card-overlay"></div>
          <div className="card-title">Resource Title 1</div>
        </div>
        {/* Card 2 */}
        <div className="card">
          <div className="card-overlay"></div>
          <div className="card-title">Resource Title 2</div>
        </div>
        {/* Card 3 */}
        <div className="card">
          <div className="card-overlay"></div>
          <div className="card-title">Resource Title 3</div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="resource-banner">
        <div className="banner-content">
          <img
            src="phone-image.png" /* Replace with your phone PNG image */
            alt="Phone"
            className="banner-phone"
          />
          <div className="banner-text">
            <h2>Download OneImpact App</h2>
            <p>Stay updated with the latest reports on disability issues.</p>
            <div className="banner-download">
              <img
                src="playstore.svg" /* Replace with your Playstore SVG image */
                alt="Playstore"
                className="playstore-icon"
              />
              <img
                src="qr-code.png" /* Replace with your QR code */
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
