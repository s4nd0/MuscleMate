import React from "react";
import { Link } from "react-router-dom";

// images
import logo from "../images/logo.png";

const Logo = () => {
  return (
    <Link className="logo" to="/">
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
