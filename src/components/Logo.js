import React from "react";
import { Link } from "react-router-dom";

// styles
import "./Logo.css";

const Logo = () => {
  return (
    <Link className="logo" to="/">
      <span className="logo-firstWord">Muscle</span>
      <br />
      <span className="logo-secondWord">Mate</span>
    </Link>
  );
};

export default Logo;
