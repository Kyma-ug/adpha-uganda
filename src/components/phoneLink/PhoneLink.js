import React from 'react';

function PhoneLink({ phoneNumber, children, style }) {
  const telLink = `tel:${phoneNumber.replace(/\D/g, '')}`; // Remove non-digit characters

  return (
    <a href={telLink} style={style}>
      {children || phoneNumber}
    </a>
  );
}

export default PhoneLink;