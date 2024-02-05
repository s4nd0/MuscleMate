import React from "react";

// react router dom
import { NavLink } from "react-router-dom";

// images
import facebook from "./images/icons8-facebook.svg";
import twitter from "./images/icons8-twitter.svg";
import instagram from "./images/icons8-instagram.svg";
import github from "./images/icons8-github.svg";

// componenst
import LinkImg from "./components/LinkImg";

const Footer = () => {
  return (
    <footer>
      <p>Visit our social media</p>
      <div className="footer-media">
        <LinkImg
          href={"https://www.facebook.com"}
          src={facebook}
          alt={"facebook-icon"}
        />
        <LinkImg
          href={"https://www.instagram.com"}
          src={instagram}
          alt={"instagram-icon"}
        />
        <LinkImg
          href={"https://twitter.com/home"}
          src={twitter}
          alt={"twitter-icon"}
        />
        <LinkImg
          href={"https://github.com/s4nd0/MuscleMate"}
          src={github}
          alt={"github-icon"}
        />
      </div>
      <div className="footer-links">
        <NavLink to="/about" className="btn">
          About project
        </NavLink>
      </div>
      <div>
        &copy; {new Date().getFullYear()} <span>Muscle</span>Mate
      </div>
    </footer>
  );
};

export default Footer;
