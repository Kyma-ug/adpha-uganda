import React from 'react';

import { Link } from "react-router-dom";

function DonateButtonNav() {
  return (
    <div className="donate-button-wrapper-nav">
      <button className="intro-cta-nav primary-nav">
        <Link to="/donate">Donate</Link>
      </button>
    </div>
  )
}

export default DonateButtonNav