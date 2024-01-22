import React from "react";

// react router dom
import { NavLink } from "react-router-dom";

// images
import facebook from "./images/icons8-facebook.svg";
import twitter from "./images/icons8-twitter.svg";
import instagram from "./images/icons8-instagram.svg";
import tiktok from "./images/icons8-tiktok.svg";

const Footer = () => {
  return (
    <footer>
      <p>Visit our social media</p>
      <div className="footer-media">
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com">
          <img src={facebook} alt="facebook-icon" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
          <img src={instagram} alt="instagram-icon" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/home">
          <img src={twitter} alt="twitter-icon" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.tiktok.com">
          <img src={tiktok} alt="tiktok-icon" />
        </a>
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
