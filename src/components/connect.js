// src/components/Designs.js
import React from 'react';
import '../App.css';
import connect from '../assets/15.png';
import prplarrow from '../assets/19.png';
import bluearrow from '../assets/20.png';
import greenarrow from '../assets/21.png';
import orangelarrow from '../assets/22.png';
const Connect = () => {
  return (
    <div className='connect-page'>
      <img src={connect} alt="design-1" />
    <div className="connect-container">
        <img src={prplarrow} alt="design-2" />
        <img src={bluearrow} alt="design-3" />
        <img src={greenarrow} alt="design-4" />
        <img src={orangelarrow} alt="design-5" />

    </div>
    </div>
  );
};

export default Connect;
