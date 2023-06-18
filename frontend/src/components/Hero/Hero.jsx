import React from 'react';
import Notebook from '../../assets/images/notebook.png';
import PhoneOne from '../../assets/images/phone-1.png';
import PhoneTwo from '../../assets/images/phone-2.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className='hero__text'>
        <h1>Today we are limited only by our imagination!</h1>
        <p>Turn your ideas into real results with us! </p>
      </div>
      <div className="hero__images">
        <img src={Notebook} alt="Notebook" className="hero__images--notebook" />
        <img
          src={PhoneOne}
          alt="Notebook"
          className="hero__images--phone-one"
        />
        <img
          src={PhoneTwo}
          alt="Notebook"
          className="hero__images--phone-two"
        />
      </div>
    </div>
  );
};

export default Hero;
