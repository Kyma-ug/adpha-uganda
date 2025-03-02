import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import "./Footer.css";
import footerlogo from './adpha-logo-footer.svg';
import { FaFacebook, FaLinkedin, FaEnvelope,  FaMapMarkerAlt, FaInstagramSquare, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter, FaPhone } from "react-icons/fa6";
import NewsLetter from "../newsLetter/NewsLetter";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div id="first-footer-column" className="footer-column">
          <Link to="/">
            <img src={footerlogo} alt="ADPHA Logo" className="footer-logo" /> 
          </Link>
          <p className="footer-description">
            Empowering persons with disabilities living with HIV & AIDS and those affected by TB through support and advocacy.
          </p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/adpha-uganda-4350b42a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" aria-label="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100078388382137" target="_blank" aria-label="Facebook">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://x.com/adphauganda" target="_blank" aria-label="X">
              <FaXTwitter className="social-icon" />
            </a>
            <a href="https://www.instagram.com/adphauganda6404?igsh=ZmI0MG5xdmIyM2xv" target="_blank" aria-label="Instagram">
              <FaInstagramSquare className="social-icon" />
            </a>
            <a href="https://www.tiktok.com/@adphauser045?lang=en" target="_blank" aria-label="Tiktok">
              <FaTiktok className="social-icon" />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/reports">
                Reports
              </Link>
            </li>
            <li>
              <Link to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/careers">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/faqs">
                FAQs
              </Link>
            </li>
            <Link to="/terms">
              Privacy Policy
            </Link>
          </ul>
        </div>

        <div className="footer-column footer-contact-col"> 
          <h4 className="footer-heading">Get in Touch</h4>
          <ul className="footer-contact">
            <li><FaEnvelope className="contact-icon" /> <a href="mailto:info@adpha-uganda.org">info@adpha-uganda.org</a></li>
            <li><FaPhone className="contact-icon" /> <a href="tel:+256800111499">+256 (0) 800 111 499</a></li>
            <li><FaWhatsapp className="contact-icon" /> <a href="tel:+256758818294">+256 758 818 294</a></li>
            <li id="location-icon-alignment">
              <FaMapMarkerAlt id="contact-icon-location" /> 
              <a href="https://maps.google.com/?q=-0.342304,31.737461" target="_blank" rel="noopener noreferrer">
                <address> 
                  Muto Complex, main Floor Room 19,<br />
                  Masaka, Uganda<br />
                </address>
              </a>
            </li>
            
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">Stay Updated</h4><br />
          <p id="stay-tuned-blue-text">Stay updated with our latest news, events, and health initiatives.</p><br /> <br />
          Subscribe to Our Newsletter <br /> <br />
          
          {/* <address className="footer-address">
            <FaMapMarkerAlt className="address-icon" />
            Muto Complex, main Floor Room 19, opposite Tropical Bank,<br />
            Masaka, Uganda<br />
            Open 8am-5:00pm: Monday - Friday<br /><br />
            <a href="https://maps.google.com/?q=-0.342304,31.737461" target="_blank" rel="noopener noreferrer">Get Directions</a>
          </address> */}
          <NewsLetter />
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 ADPHA Uganda. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;