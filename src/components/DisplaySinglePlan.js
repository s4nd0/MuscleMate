import React from "react";

import "./PlanWindow.css";

const DisplaySinglePlan = ({ item }) => {
  return (
    <>
      <div className="planWindow-content-row secondary-text">
        <p>Exercise</p>
        <p>Sets</p>
        <p>Reps</p>
      </div>
      {item.rows.map((row) => (
        <div key={row.exercise} className="planWindow-content-row">
          <p>{row.exercise}</p>
          <p>{row.sets !== "" ? row.sets : "-"}</p>
          <p>{row.reps !== "" ? row.reps : "-"}</p>
        </div>
      ))}
    </>
  );
};

export default DisplaySinglePlan;
