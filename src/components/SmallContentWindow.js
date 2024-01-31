import React from "react";

// styles
import "./SmallContentWindow.css";

const SmallContentWindow = ({ text, value, color }) => {
  return (
    <div className={`small-content-window`}>
      <div className={`${color}`}>
        {text && <p>{text}</p>}
        {value && <p>{value}</p>}
      </div>
    </div>
  );
};

export default SmallContentWindow;
