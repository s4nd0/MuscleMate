import React from "react";

// styles
import "./CenterText.css";

const CenterText = ({ value, src, alt }) => {
  return (
    <div className="center-text">
      <p>{value}</p>
      <img src={src} alt={alt} />
    </div>
  );
};

export default CenterText;
