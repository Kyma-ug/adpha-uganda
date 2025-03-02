import React from 'react';

const LocationMap = ({ latitude = -0.342304, longitude = 31.737461 }) => {
  const apiKey = 'AIzaSyAwPnOkA-A01GsYTNZ28mfSYhHHBHkbcwA'; 
  const locationUrl = `https://www.google.com/maps/embed/v1/place?q=${latitude},${longitude}&zoom=14&key=${apiKey}`;

  const mapTitle = `Map showing ADPHA Uganda office location at latitude ${latitude} and longitude ${longitude}`;

  return (
    <iframe
      src={locationUrl}
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title={mapTitle}
      aria-label={mapTitle}
    ></iframe>
  );
};

export default LocationMap;