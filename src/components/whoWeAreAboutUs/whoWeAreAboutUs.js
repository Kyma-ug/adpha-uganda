import React from 'react';
import './WhoWeAreAboutUs.css'; 

import AdphaTeamMeambers from './ADPHA_Team_Members_At_World_TB_Day.jpg';

const WhoWeAreAboutUs = () => {
  return (
    <section aria-labelledby="who-we-are-title" className="who-we-are">
      <div className="who-we-are-content">
        <h2 id="who-we-are-title" className="who-we-are-title">Who We Are</h2>
        <div className="who-we-are-dash" aria-hidden="true"></div>
        <p className="who-we-are-text">
        The Association of Persons with Disabilities Living with HIV (ADPHA) Uganda is a beacon of hope and support for individuals with disabilities living with or affected by HIV and TB, and their families.  Starting in 2009 in the districts of Masaka, Kalungu, Lwengo, Bukomansimbi, and Rakai, we've grown to serve communities across Uganda.  As the first organized peer-support network of its kind in the country, ADPHA-Uganda champions the rights of people with disabilities within national HIV/AIDS and TB programs. <br/>
        We believe in empowering our members to lead fulfilling lives.  Our support includes:

        Community Peer Support: Connecting individuals with vital HIV/TB information and services.<br/>
        Leadership Development: Mentoring and coaching leaders to effectively advocate for their rights.<br/>
        Livelihoods & Emergency Support: Providing resources and assistance to improve livelihoods and navigate emergencies.<br/>
        GBV & SRHR Advocacy: Sharing information and training on the prevention of gender-based violence and promoting sexual and reproductive health rights, in line with the Convention on the Rights of Persons with Disabilities (CRPD).   

        </p>
      </div>
      {/* <img 
        src= {AdphaTeamMeambers}
        alt="ADPHA members participating in World TB commemoration event" 
        className="who-we-are-image" 
        loading="lazy" 
      /> */}


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