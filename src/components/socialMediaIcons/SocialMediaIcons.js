// SocialMediaIcons.jsx
import React from 'react';
import './SocialMediaIcons.css';


import facebook from './facebook.svg';
import instagram from './insta.svg';
import tiktok from './tiktok.svg';
import whatsapp from './whatsapp.svg';



const socialMediaLinks = [
  {
    icon: facebook, 
    link: 'https://www.facebook.com/ADPHA%20Uganda',
  },
  {
    icon: tiktok,
    link: 'https://x.com/adphauganda', 
  },
  {
    icon: instagram, 
    link: 'https://x.com/adphauganda', 
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