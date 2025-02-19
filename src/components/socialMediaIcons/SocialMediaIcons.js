// SocialMediaIcons.jsx
import React from 'react';
import './SocialMediaIcons.css';


import facebook from './facebook.svg';
import instagram from './insta.svg';
import tiktok from './tiktok.svg';
import whatsapp from './whatsapp.svg';
import linkedin from './linkedin.svg';
import x from './x.svg';


const socialMediaLinks = [
  {
    icon: linkedin, 
    link: 'https://www.linkedin.com/in/adpha-uganda-4350b42a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 
  },
  {
    icon: facebook, 
    link: 'https://www.facebook.com/profile.php?id=100078388382137',
  },
  {
    icon: x,
    link: 'https://x.com/adphauganda', 
  },
  {
    icon: instagram, 
    link: 'https://www.instagram.com/adphauganda6404?igsh=ZmI0MG5xdmIyM2xv', 
  },

  {
    icon: tiktok, 
    link: 'https://www.tiktok.com/@adphauser045?lang=en', 
  },
  {
    icon: whatsapp, 
    link: '+256 758 818 294', 
  },
  
];

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      {socialMediaLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer" // Important for security when opening links in new tabs
          className="social-icon-link"
        >
          {/* Use your imported SVG component here */}
          {/* Example: <item.icon className="social-icon" /> */}
          <img src={item.icon} alt={item.icon} className="social-icon" />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;