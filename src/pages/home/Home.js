import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';

import Hero from '../../components/hero/Hero';
import Intro from '../../components/intro/Intro';
import MakingADifference from '../../components/makingAdifference/MakingADifference';
import StatisticsSection from '../../components/statSection/StatisticsSection';
import Carousels from '../../components/partnercarousel/Carousels';



import addlogo from './img-01.png';
// import stoptb from './img-02.png';
import tag from './img-03.png';
import voice from './voice-uganda.png';
import stoptbpart from './img-05.png';
import amplify from './img-06.png';
import viiv from './img-07.png';
import dfhug from './img-08.png';
import drf from './img-09.png';
import nerve from './img-10.png';
import frontline from './img-11.png';
import ResourceCenter from '../../components/resourcecenter/ResourceCenter';
import CarouselHomeHero from '../../components/carouselHomeHero/CarouselHomeHero';
import ResourceCenterHome from '../../components/resourceCenterHome/ResourceCenterHome';


const partners = [
  { id: 1, name: 'ADD International', logo: addlogo, website: 'https://add.org.uk/madipha/' },
  { id: 2, name: 'The Stop TB Partnership', logo: stoptbpart, website: 'https://www.stoptb.org/' },
  { id: 3, name: 'Amplify Change', logo: amplify, website: 'https://amplifychange.org/' },
  { id: 4, name: 'The Disability Rights Fund', logo: drf, website: 'https://www.disabilityrightsfund.org/' },
  // { id: 5, name: 'Partner 10', logo: stoptb, website: 'https://ustp.org.ug/' },
  { id: 6, name: 'Frontline AIDS', logo: frontline, website: 'https://frontlineaids.org/' },
  { id: 7, name: 'Treatment Action Group', logo: tag, website: 'https://www.treatmentactiongroup.org/' },
  { id: 8, name: 'DHF Uganda', logo: dfhug, website: 'https://x.com/DhfUganda' },
  { id: 9, name: 'We Got Nerve', logo: nerve, website: 'https://www.wegotnerve.com/' },
  { id: 10, name: 'VIIV Health Care', logo: viiv, website: 'https://viivhealthcare.com/' },
  { id: 11, name: 'Voice Uganda', logo: voice, website: 'https://voiceuganda.com/' },
  
];




const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust 768 as needed

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Clean up
  }, []);

  return (
    <div>
      <CarouselHomeHero />
      <Intro />
      <MakingADifference />
      <StatisticsSection />
      <Carousels partners={partners} />

      
      {!isMobile && <ResourceCenter />}
      {isMobile && <ResourceCenterHome />}
    </div>
  );
};

export default Home;



