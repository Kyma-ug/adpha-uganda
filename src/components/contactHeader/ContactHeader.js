import React from 'react';
import { FaLocationDot, FaPhone, FaClock } from 'react-icons/fa6';
import './ContactHeader.css';
import SocialMediaIcons from '../socialMediaIcons/SocialMediaIcons';

const ContactHeader = () => {
  return (
    <div className="contact-header">
        
        {/* <div className='contact-header-li'>
            <FaLocationDot />
            <p>Muto Complex, main Floor Room 19, Masaka, Uganda</p>

        </div> */}
        {/* <div className='contact-header-li'>
            <FaClock />
            <p>Open 8am-5:00pm: Monday - Friday</p>

        </div> */}
        <div className='contact-header-li'>
            <SocialMediaIcons />

        </div>
        <div className='contact-header-li tele-nav'>
            <FaPhone />
            <p>+256 (0) 783 818 294 / +256 (0) 800 111 499</p>

        </div>
    </div>
  );
};

export default ContactHeader;