import React, { useState } from "react";

const Header = () => {
  const [toggleButton, setToggleButton] = useState(false);
  return (
    <div className="header fixed">
      <div className="brand-container">
        <a href="#" className="brand-link">
          AK
        </a>
      </div>
      <nav
        id="navbar"
        onClick={() => {
          //collapse nav menu onClick if and only if the navbar has class "navbar-mobile"
          const navEl = document.getElementsByClassName("navbar-mobile")[0];
          //don't do anything if navEl is undefined, means navbar-mobile doesn't exist
          if (navEl === undefined) {
            return;
            //if navEL exists, then change the toggle to collapse the navmenu onclick
          } else {
            setToggleButton(!toggleButton);
          }
        }}
        className={toggleButton ? "navbar-mobile" : "navbar"}
      >
        <span onClick={() => window.scrollTo(0, 0)} className="link">
          Home
        </span>
        <a href="#about" className="link">
          About
        </a>
        <a href="#projects" className="link">
          Projects
        </a>
        <a href="#skills" className="link">
          Skills
        </a>
        <a href="#contact" className="link">
          Contact
        </a>
      </nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#FFFFFF"
        className="menu-button"
        onClick={() => setToggleButton(!toggleButton)}
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </div>
  );
};

export default Header;
