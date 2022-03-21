import React, { useState, useEffect } from "react";

const Header = () => {
  const [toggleButton, setToggleButton] = useState(false);
  return (
    <div className="header fixed">
      <div className="brand-container">
        <a href="/home" className="brand-link">
          Anil Kumar MR
        </a>
      </div>
      <div
        id="navbar"
        onClick={() => {
          const navEl = document.getElementsByClassName("navbar-mobile")[0];
          if (navEl === undefined) {
            return;
          } else {
            setToggleButton(!toggleButton);
          }
        }}
        className={toggleButton ? "navbar-mobile" : "navbar"}
      >
        <a href="#" onClick={() => window.scrollTo(0, 0)} className="link">
          Home
        </a>
        <a href="#about" className="link">
          About
        </a>
        <a href="/projects" className="link">
          Projects
        </a>
        <a href="/skills" className="link">
          Skills
        </a>
        <a href="/contactme" className="link">
          Contact
        </a>
      </div>
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
