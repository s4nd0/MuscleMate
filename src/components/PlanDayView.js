import React from "react";

// styles
import "./PlanWindow.css";

// components
import PlanTitle from "./PlanTitle";
import DisplaySinglePlan from "./DisplaySinglePlan";

const PlanDayView = ({ item, preview }) => {
  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <>
      <div className="PlanWindow PlanWindow-Line">
        <PlanTitle
          p1={!preview ? week[item.id] : `${week[item.id]} (preview)`}
          p2={item.name}
        />
        {item.rows && <DisplaySinglePlan item={item} />}
      </div>
    </>
  );
};

export default PlanDayView;
