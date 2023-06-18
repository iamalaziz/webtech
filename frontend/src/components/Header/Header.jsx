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

const Header = () => {
  return (
    <header className="header">
      <NavLink href="/">
        <div className="header__logo">
          <span>web</span>tech
        </div>
      </NavLink>
      <div className="header__nav">
        {navItems.map((item) => {
          return (
            <li key={item.link} className="header__nav--item">
              <NavLink href={item.link}>{item.name}</NavLink>
            </li>
          );
        })}
      </div>
      <div className="header__controls">
        <select name="lang" id="lang" className="header__dropdown">
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="ko">KO</option>
        </select>

        <button className="btn-start-project">
          Start A Project <FiArrowRight />
        </button>
        <button className="btn-burger">
          <RiMenu3Line />
        </button>
      </div>
    </header>
  );
};

export default Header;
