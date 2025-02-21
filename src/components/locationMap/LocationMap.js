import React from 'react';

const LocationMap = () => {
  const locationUrl = 'https://maps.google.com/?q=-0.342304,31.737461';
  const latitude = -0.342304;
  const longitude = 31.737461;

  // Construct a descriptive title for SEO and screen readers
  const mapTitle = `Map showing location at latitude ${latitude} and longitude ${longitude}`;

  return (
    <iframe
      src={locationUrl}
      width="100%" // Adjust as needed, consider responsiveness
      height="450" // Adjust as needed
      style={{ border: 0 }} // Remove default iframe border if desired
      allowFullScreen="" // Allows fullscreen mode
      loading="lazy" // Improves performance by lazy-loading the iframe
      title={mapTitle} // Accessibility and SEO - descriptive title
      aria-label={mapTitle} // Explicit label for screen readers (redundant with title in most cases, but good practice for clarity)
    >
    </iframe>
  );
};

export default LocationMap;