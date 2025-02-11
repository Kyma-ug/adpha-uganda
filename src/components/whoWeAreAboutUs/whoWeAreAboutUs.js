import React from 'react';
import { motion } from 'framer-motion';

import './WhoWeAreAboutUs.css'; 

import AdphaTeamMeambers from './ADPHA_Team_Members_At_World_TB_Day.jpg';

const WhoWeAreAboutUs = () => {
  return (
    <section aria-labelledby="who-we-are-title" className="who-we-are">
      <div className="who-we-are-content">
        <motion.h2 
        id="who-we-are-title" 
        className="who-we-are-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
          Who We Are
        </motion.h2>
        <motion.div 
        className="who-we-are-dash" 
        aria-hidden="true"
        initial={{  width: 0 , originX: '0%' }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        ></motion.div>
        <p className="who-we-are-text">
        The Association of Persons with Disabilities Living with HIV (ADPHA) Uganda is a beacon of hope and support for individuals with disabilities living with or affected by HIV and TB, and their families.  Starting in 2009 in the districts of Masaka, Kalungu, Lwengo, Bukomansimbi, and Rakai, we've grown to serve communities across Uganda.  As the first organized peer-support network of its kind in the country, ADPHA-Uganda champions the rights of people with disabilities within national HIV/AIDS and TB programs. <br/>
        We believe in empowering our members to lead fulfilling lives.  Our support includes:</p><br/>


          <p className='indent-my-text'><span><div className='bullet-point' aria-hidden="true"></div></span><b>Community Peer Support:</b> Connecting individuals with vital HIV/TB information and services.</p><br/>
          <p className='indent-my-text'><span className='bullet-point' aria-hidden="true"></span><b>Leadership Development:</b> Mentoring and coaching leaders to effectively advocate for their rights.</p><br/>
          <p className='indent-my-text'><span className='bullet-point' aria-hidden="true"></span><b>Livelihoods & Emergency Support:</b> Providing resources and assistance to improve livelihoods and navigate emergencies.</p><br/>
          <p className='indent-my-text'><span className='bullet-point' aria-hidden="true"></span><b>GBV & SRHR Advocacy:</b> Sharing information and training on the prevention of gender-based violence and promoting sexual and reproductive health rights, in line with the Convention on the Rights of Persons with Disabilities (CRPD).</p>   
        
        
      </div>
       

        <div className="image-container">
            <img 
            src={AdphaTeamMeambers}
            alt="ADPHA members participating in World TB commemoration event" 
            className="who-we-are-image" 
            loading="lazy" 
            />
            <div className="image-background"></div>
        </div>


    </section>
  );
};

export default WhoWeAreAboutUs;