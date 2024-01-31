import React from "react";

// styles
import "./PlanWindow.css";

const PlanContent = ({ text, addClass }) => {
  return <div className={`planWindow-content ${addClass}`}>{text}</div>;
};

export default PlanContent;
