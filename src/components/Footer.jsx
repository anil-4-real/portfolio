import React from "react";

const Footer = () => {
  return (
    <div className="container footer-container">
      <hr />
      <div className="links-container">
        <div>
          <h3 className="links-heading">Links</h3>
          <a
            className="footer-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.codewars.com/users/Anil07"
          >
            Codewars
          </a>
          <a
            className="footer-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.hackerrank.com/anilkumarappu4"
          >
            HackerRank
          </a>
          <a
            className="footer-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.guvi.in/anilkumarappu4"
          >
            Codekata
          </a>
        </div>
        <div>
          <h3 className="links-heading">Social</h3>
          <a
            className="footer-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/anil-kumar-mr-aa428a159/"
          >
            Linkedin
          </a>
          <a
            className="footer-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/anil-4-real"
          >
            GitHub
          </a>
          <a
            className="footer-link"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/im__anil"
          >
            Twitter
          </a>
        </div>

        <div>
          <h3 className="links-heading">Extra</h3>
          <a
            className="footer-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/anil-4-real/portfolio/"
          >
            Source code
          </a>
        </div>
      </div>
      <p className="copyright">&copy; Anil Kumar MR 2022</p>
    </div>
  );
};

export default Footer;
