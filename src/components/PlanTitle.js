import React from "react";

// styles
import "./PlanWindow.css";

const PlanTitle = ({ p1, p2, addClass, img, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={
        addClass ? `planWindow-header ${addClass}` : `planWindow-header`
      }
    >
      {p1 && <p>{p1}</p>}
      {p2 && <p>{p2}</p>}
      {img && <img src={img} alt="title-icon" />}
    </div>
  );
};

export default PlanTitle;
