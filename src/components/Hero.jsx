import React from "react";
import heroImage from "../assets/heroImage.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="brief-container">
        <h2 className="hello">
          Hey there, I'm <span className="hello-span">Anil Kumar MR</span>
        </h2>
        <p className="subtitle">A web developer based in India</p>

        <p className="misc-text">
          Welcome to my portfolio, where you can find about myself and my work.
        </p>
        <div className="btn-group">
          <a href="/contactme" className="contact-me-btn">
            CONTACT
          </a>
          <a href="/contactme" className="resume-btn">
            &#x21e9;&nbsp;RESUME
          </a>
        </div>
      </div>

      <img
        className="hero-image"
        alt="decorative-absctract-from-freepik.com"
        src={heroImage}
      />
    </div>
  );
};

export default Hero;
