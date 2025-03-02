import React from 'react';
import styled from 'styled-components';

const Separator = () => {
  return (
    <StyledSeparator />
  );
};

const StyledSeparator = styled.div`
  width: 100%;
  height: 2px;
  background-color: #ccc; /* Adjust color as needed */
  margin: 20px 0; 

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%; 
    height: 100%;
    background-color: #ccc; 
  }
`;

export default Separator;