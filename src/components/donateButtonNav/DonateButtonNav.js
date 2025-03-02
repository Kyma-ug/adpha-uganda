import React from 'react';

import { Link } from "react-router-dom";

function DonateButtonNav() {
  return (
    <div className="donate-button-wrapper-nav">
      <a href="https://www.paypal.com/donate/?cmd=_donations&business=info@adpha-uganda.org&item_name=ADPHA&currency_code=USD" target="_blank" rel="noopener noreferrer">
        <button className="intro-cta-nav primary-nav">
          {/* <Link to="/donate">Donate</Link> */}
          Donate
        </button>
      </a>
    </div>
  )
}

export default DonateButtonNav