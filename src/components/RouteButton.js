import React from "react";
import { Link } from "react-router-dom";

// styles
import "./PlanWindow.css";

const RouteButton = ({ route, text }) => {
  return (
    <div className="dark-bg">
      <Link to={route} className="btn">
        {text}
      </Link>
    </div>
  );
};

export default RouteButton;
