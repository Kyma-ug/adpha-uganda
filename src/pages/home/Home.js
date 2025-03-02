import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';

import Intro from '../../components/intro/Intro';
import MakingADifference from '../../components/makingAdifference/MakingADifference';
import StatisticsSection from '../../components/statSection/StatisticsSection';



import ResourceCenter from '../../components/resourcecenter/ResourceCenter';
import CarouselHomeHero from '../../components/carouselHomeHero/CarouselHomeHero';
import ResourceCenterHome from '../../components/resourceCenterHome/ResourceCenterHome';
import CarouselPartners from '../../components/partnercarousel/CarouselPartners';







const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 

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
      <CarouselPartners />

      
      {!isMobile && <ResourceCenter />}
      {isMobile && <ResourceCenterHome />}
    </div>
  );
};

export default Home;



