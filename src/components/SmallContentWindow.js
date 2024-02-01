import React from "react";

// styles
import "./SmallContentWindow.css";

const SmallContentWindow = ({ text, value, color }) => {
  return (
    <div className={`small-content-window`}>
      <div className={`${color}`}>
        {value && <p>{value}</p>}
        {text && <p>{text}</p>}
      </div>
    </div>
  );
};

export default SmallContentWindow;
