import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-us-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>Reach out, we'd love hearing from you!</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <div className="columns">
          {/* Left Column */}
          <div className="contact-info">
            <h2>Get in touch</h2>
            <div className="contact-item">
              <p><strong>Address:</strong> Muto Complex, main Floor Room 19, opposite Tropical Bank, Masaka, Uganda</p>
            </div>
            <div className="contact-item">
              <p><strong>Phone:</strong> +256 (0) 783 818 294  |  +256 (0) 800 111 499</p>
            </div>
            <div className="contact-item">
              <p><strong>Email:</strong> info@adpha-uganda.org</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="contact-form">
            <h2>Have a question?</h2>
            <p>Leave your question here.</p>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone" required />
              <textarea placeholder="Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <div className='center-iframe' style={{ width: '100%' }}>
          <iframe
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=plot%202%20broadway%20rd%20masaka+(ADPHA)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
          </iframe>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
