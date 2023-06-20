import React from 'react';
import Notebook from '../../assets/images/notebook.png';
import PhoneOne from '../../assets/images/phone-1.png';
import PhoneTwo from '../../assets/images/phone-2.png';

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__top">
        <div className="hero__text">
          <h1>Today we are limited only by our imagination!</h1>
          <div className="hero__line"></div>
          <p>Turn your ideas into real results with us! </p>
        </div>
        <div className="hero__images">
          <img
            src={Notebook}
            alt="Notebook"
            className="hero__images--notebook"
          />
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
          <div className="hover-area"></div>
        </div>
      </div>
      <div className="hero__bottom">
        <div className="hero__social">
          <a href="https://www.instagram.com/">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
          <a href="https://www.instagram.com">
            <FaLinkedinIn />
          </a>
          <svg width="0" height="0">
            <linearGradient
              id="blue-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#00f0ff" offset="35%" />
              <stop stopColor="#3360ff" offset="97%" />
            </linearGradient>
          </svg>
        </div>
        <a className="scroll-down" href="#three-features">
          <div className="scroll-down__inner"></div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
