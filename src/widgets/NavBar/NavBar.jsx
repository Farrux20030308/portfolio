import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import line from "../../assets/images/vertical-line.svg";
import tg from "../../assets/icons/tg-icon.svg";
import inst from "../../assets/icons/ig-icon.svg";
import github from "../../assets/icons/github-icon.svg";
import burger from "../../assets/icons/burger.svg";
import burgerCancel from "../../assets/icons/burgerCancel.svg";

import "./NavBar.css";
import "./NavBarMedia.css";

const NavBar = ({ theme, setTheme }) => {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <header className="header">
      <div className="navbar__contacts">
        <img className="contact-line" src={line} alt="" />
        <div className="contacts-links">
          <a target="blank" href="https://t.me/Creator_1_st">
            <img src={tg} alt="Telegram" />
          </a>
          <a target="blank" href="https://instagram.com/n.ai_sora">
            <img src={inst} alt="Instagram" />
          </a>
          <a target="blank" href="https://github.com/Farrux20030308">
            <img src={github} alt="GitHub" />
          </a>
        </div>
      </div>

      <nav className="nav">
        <button className="navbar__logo-button">
          <img className="logo" src={logo} alt="Logo" />
          <h1>N'Ai SoRA</h1>
        </button>
        <div className="burger__menu">
          <button className="burger__btn" onClick={() => setOpenBurger(!openBurger)}>
            <img src={openBurger ? burgerCancel : burger} alt="burger_btn" />
          </button>
        </div>
        <ul className={`menu ${openBurger ? "navbar__links open" : "navbar__links close"}`}>
        
          <li>
            <a onClick={() => setOpenBurger(!openBurger)} href="#">
              <span className="violet">#</span>home
            </a>
          </li>
          <li>
            <a onClick={() => setOpenBurger(!openBurger)} href="#projects">
              <span className="violet">#</span>projects
            </a>
          </li>
          <li>
            <a onClick={() => setOpenBurger(!openBurger)} href="#about-me">
              <span className="violet">#</span>about_me
            </a>
          </li>
          <li>
            <a onClick={() => setOpenBurger(!openBurger)} href="#contacts">
              <span className="violet">#</span>contacts
            </a>
          </li>

          <div className="select">
            <select value={theme} onChange={(e) => setTheme(e.target.value)} id="theme">
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>
        </ul>

        
      </nav>
    </header>
  );
};

export default NavBar;
