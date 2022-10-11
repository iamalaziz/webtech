import React, { useState, useContext } from "react";
import { Container, Div1, Div2, Div3, Logo } from "./HeaderStyles";
import { NavLink } from "react-router-dom";
import { MdLightMode, MdDarkMode } from "react-icons/md";



const navItems = [
  {
    link: "#about",
    name: "About",
  },
  {
    link: "#services",
    name: "Services",
  },
  {
    link: "#works",
    name: "Works",
  },
  {
    link: "#blog",
    name: "Blog",
  },
  {
    link: "#contact",
    name: "Contact",
  },
];

const Header = () => {
  const [mode, setMode] = useState('dark');
  const toggle = () => setMode(mode === "light" ? "dark" : "light");
  return (
    <Container>
      <Div1>
        <NavLink href="/">
          <Logo>
            <span>web</span>tech
          </Logo>
        </NavLink>
      </Div1>
      <Div2>
        {navItems.map((item) => {
          return (
            <li key={item.link}>
              <NavLink href={item.link}>{item.name}</NavLink>
            </li>
          );
        })}
      </Div2>
      <Div3>
        <div className="dropdown">
          <select name="lang" id="lang">
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="ko">KO</option>
          </select>
        </div>
        <button className="btn-project">Start A Project</button>
        <button onClick={toggle} className="btn-mode">
          {mode === "light" ? <MdDarkMode className="icon"/> : <MdLightMode className="icon"/>}
        </button>
      </Div3>
    </Container>
  );
};

export default Header;
