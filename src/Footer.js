import React from "react";

import facebook from "./images/icons8-facebook.svg";
import twitter from "./images/icons8-twitter.svg";
import instagram from "./images/icons8-instagram.svg";
import github from "./images/icons8-github.svg";
import tiktok from "./images/icons8-tiktok.svg";

const Footer = () => {
  const mediaArray = [facebook, instagram, twitter, github, tiktok];

  return (
    <footer>
      <p>Visit our social media</p>
      <div className="footer-media">
        {mediaArray.map((media) => (
          <a key={media} href="#">
            <img src={media} alt={media} />
          </a>
        ))}
      </div>
      <div>
        &copy; {new Date().getFullYear()} <span>Muscle</span>Mate
      </div>
    </footer>
  );
};

export default Footer;
