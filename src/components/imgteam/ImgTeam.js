import React from 'react';
import './ImgTeam.css';



const ImgTeam = () => {
  return (
    <div className="image-clip-container">
      <div className="image-clip">
        <img src="your-image-url" alt="Image" />
        <div className="clipped-square"></div>
      </div>
      <div className="text-container">
        <h2 className="header">Header Text</h2>
        <p className="description">Description text</p>
        <div className="header-pseudo"></div>
      </div>
    </div>
  );
};

export default ImgTeam;