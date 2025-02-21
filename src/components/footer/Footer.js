import React from "react";
import "./Footer.css";
import footerlogo from './adpha-logo-footer.svg';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Logo, Description, Social Media */}
        <div className="footer-column">
          <img src={footerlogo} alt="ADPHA Logo" className="footer-logo" />
          <p className="footer-description">
            Empowering persons with disabilities living with HIV & AIDS and those affected by TB through support and advocacy.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com" aria-label="Facebook">
              <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="..."></path></svg>
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="..."></path></svg>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <svg className="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="..."></path></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#reports">Reports</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 3: Get In Touch */}
        <div className="footer-column">
          <h4 className="footer-heading">Get in Touch</h4>
          <ul className="footer-contact">
            <li>Email: <a href="mailto:info@adpha-uganda.org">info@adpha-uganda.org</a></li>
            <li>Phone: <a href="tel:+256800111499">+256 (0) 800 111 499  </a></li>
            <li>Support: <a href="mailto:info@adpha-uganda.org">support@adpha-uganda.org</a></li>
          </ul>
        </div>

        {/* Column 4: Visit Us */}
        <div className="footer-column">
          <h4 className="footer-heading">Visit Us</h4>
          <address className="footer-address">
            Muto Complex, main Floor Room 19, opposite Tropical Bank,<br />
            Masaka, Uganda<br />
            Open 8am-5:00pm: Monday - Friday<br /><br />
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">Get Directions</a>
          </address>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 ADPHA Uganda. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
