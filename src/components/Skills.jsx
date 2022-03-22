import React from "react";
import javascript from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import nodejs from "../assets/images/nodejs.png";
import expressjs from "../assets/images/expressjs.png";
import bootstrap from "../assets/images/bootstrap.svg";
import python from "../assets/images/python.png";
import mongodb from "../assets/images/mongodb.png";
import git from "../assets/images/git.png";
import github from "../assets/images/github.png";

const Skills = () => {
  return (
    <div className="container" id="skills">
      <hr />
      <h1 className="section-header">Skills</h1>
      <div className="img-wrapper">
        <div className="img-container">
          <img className="skills-img" src={javascript} alt="javascript" />
          <p className="img-title">JavaScript</p>
        </div>
        <div className="img-container">
          <img className="skills-img" src={python} alt="python" />
          <p className="img-title">Python</p>
        </div>
        <div className="img-container">
          <img className="skills-img" src={react} alt="react" />
          <p className="img-title">React</p>
        </div>
        <div className="img-container">
          <img className="skills-img" src={html} alt="html" />
          <p className="img-title">HTML</p>
        </div>
        <div className="img-container">
          <img className="skills-img" src={css} alt="css" />
          <p className="img-title">CSS</p>
        </div>
        <div className="img-container">
          <img className="skills-img" src={bootstrap} alt="bootstrap" />
          <p className="img-title">Bootstrap</p>
        </div>
        <div className="img-container">
          <img className="skills-img" src={nodejs} alt="nodejs" />
          <p className="img-title">Node.js</p>
        </div>
        <div className="img-container">
          <img className="skills-img" src={mongodb} alt="mongodb" />
          <p className="img-title">MongoDB</p>
        </div>
        <div className="img-container">
          <img className="skills-img" src={git} alt="git" />
          <p className="img-title">git</p>
        </div>
        <div className="img-container">
          <img className="skills-img" src={github} alt="github" />
          <p className="img-title">Github</p>
        </div>
        <div className="img-container">
          <img className="skills-img" src={expressjs} alt="expressjs" />
          <p className="img-title">ExpressJS</p>
        </div>
      </div>

      <h2 className="section-subheading">Other tools:</h2>
      <p className="section-paragraph">Postman</p>
      <p className="section-paragraph">JWT</p>
      <p className="section-paragraph">Formik</p>
      <p className="section-paragraph">Auth0</p>
      <p className="section-paragraph">Mongoose</p>
      <p className="section-paragraph">React Bootstrap</p>
    </div>
  );
};

export default Skills;
