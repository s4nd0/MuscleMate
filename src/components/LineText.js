import React from "react";

// styles
import "./LineText.css";

const LineText = ({ text, color }) => {
  return <p className={`lineText ${color}`}>{text}</p>;
};

export default LineText;
