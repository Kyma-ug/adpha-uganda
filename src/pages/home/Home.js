import React from 'react';
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


const partners = [
  { id: 1, name: 'Partner 1', logo: addlogo, website: 'https://add.org.uk/madipha/' },
  { id: 2, name: 'Partner 2', logo: stoptbpart, website: 'https://www.stoptb.org/' },
  { id: 3, name: 'Partner 3', logo: amplify, website: 'https://amplifychange.org/' },
  { id: 4, name: 'Partner 6', logo: drf, website: 'https://www.disabilityrightsfund.org/' },
  // { id: 5, name: 'Partner 10', logo: stoptb, website: 'https://ustp.org.ug/' },
  { id: 6, name: 'Partner 5', logo: frontline, website: 'https://frontlineaids.org/' },
  { id: 7, name: 'Partner 8', logo: tag, website: 'https://www.treatmentactiongroup.org/' },
  { id: 8, name: 'Partner 4', logo: dfhug, website: 'https://x.com/DhfUganda' },
  { id: 9, name: 'Partner 7', logo: nerve, website: 'https://www.wegotnerve.com/' },
  { id: 10, name: 'Partner 10', logo: viiv, website: 'https://viivhealthcare.com/' },
  { id: 11, name: 'Partner 9', logo: voice, website: 'https://voiceuganda.com/' },
  
];


const Home = () => {
  return (
    <div>

        <Hero />
        <Intro />
        
        <MakingADifference />
        <StatisticsSection />
        
        <Carousels partners={partners} />
        <ResourceCenter />
    </div>



  );
};



export default Home;