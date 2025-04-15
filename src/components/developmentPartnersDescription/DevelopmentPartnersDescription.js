import React from 'react';
import './DevelopmentPartnersDescription.css'; // Import the updated CSS file

const DevelopmentPartnersDescription = () => {
  // Partner data remains the same
  const partners = [
    { name: 'ADD International', dates: '2010 to 2021' },
    { name: 'Abilis Foundation', dates: '2017 to 2019' },
    { name: 'Disability Rights Fund (DRF)', dates: '2017 to 2022' },
    { name: 'Treatment Action group (TAG)', dates: '2019 to 2021' },
    { name: 'Frontline AIDS and Peoples Vaccine', dates: '2022 to 2023' },
    { name: 'Stop TB partnership', dates: '2022 to 2025' },
    { name: 'Dansk Handicap Forbund (DHF)', dates: '2019 to 2025' },
    { name: 'Kataremwa Chesire home', dates: '2024 to 2025' },
  ];

  return (
    <div className="partners-description-container">
      <p className="partners-intro">
        The work of ADPHA Uganda has been generously supported by national and
        international development partners including:
      </p>
      <ul className="partners-list">
        {partners.map((partner, index) => (
          <li key={index} className="partner-item">
            <strong className="partner-name">{partner.name}</strong>
            {/* Add semicolon and space directly after the name */}
            {': '}
            <span className="partner-dates">{partner.dates}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DevelopmentPartnersDescription;