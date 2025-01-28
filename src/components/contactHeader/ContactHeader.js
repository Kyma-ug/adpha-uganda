import React from 'react';
import { FaLocationDot, FaPhone, FaClock } from 'react-icons/fa6';
import './ContactHeader.css';

const ContactHeader = () => {
  return (
    <div className="contact-header">
        
        <div className='contact-header-li'>
            <FaLocationDot />
            <p>Plot 2, Broadway Road, Masaka, Uganda</p>

        </div>
        <div className='contact-header-li'>
            <FaClock />
            <p>Open 8am-5:00pm: Monday - Friday</p>

        </div>
        <div className='contact-header-li'>
            <FaPhone />
            <p>+256 (0) 783 818 294 / +256 (0) 800 111 499</p>

        </div>
    </div>
  );
};

export default ContactHeader;