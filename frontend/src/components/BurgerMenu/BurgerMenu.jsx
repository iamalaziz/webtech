import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';
import { RiMenu3Line } from 'react-icons/ri';

const navItems = [
  {
    link: '#about',
    name: 'About',
  },
  {
    link: '#services',
    name: 'Services',
  },
  {
    link: '#works',
    name: 'Works',
  },
  {
    link: '#blog',
    name: 'Blog',
  },
  {
    link: '#contact',
    name: 'Contact',
  },
];

const BurgerMenu = ({isOpen, handleToggle}) => {
  

  return (
    <div
      className={`burger-menu ${isOpen ? 'open' : ''}`}
      onClick={handleToggle}
    >
      <button className="btn-burger">
        <RiMenu3Line />
      </button>
      <div className="burger-menu__nav">
        {navItems.map((item) => {
          return (
            <li key={item.link} className="header__nav--item">
              <NavLink href={item.link}>{item.name}</NavLink>
            </li>
          );
        })}
      </div>
      <button className="btn-start-project">
        Start A Project <FiArrowRight />
      </button>
    </div>
  );
};

export default BurgerMenu;
