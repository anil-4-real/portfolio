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

        <p className="misc-text">Welcome to my portfolio</p>
        <div className="btn-group">
          <a href="#contact" className="contact-me-btn">
            CONTACT
          </a>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1NhS5K07n9f-e8YnCIxHVsqyA9B-Rb37e/view?usp=sharing"
            className="resume-btn"
          >
            RESUME
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
