import React, { Component } from 'react';
import '../css/confetti.css';

const Confetti = ({props}) => {
  return (
    <React.Fragment>
    {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
    width="10" height="10" viewBox="0 0 10 10" id="circle-svg">
      <circle cx="5" cy="5" r="5"></circle>
    </svg> */}
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
    width="20" height="20" viewBox="0 0 20 20" id="circle-svg">
      <circle cx="10" cy="10" r="10"></circle>
    </svg>
    </React.Fragment>
  );
};

export default Confetti;