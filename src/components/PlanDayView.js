import React from "react";

// styles
import "./PlanWindow.css";

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
      <div className="PlanWindow">
        <div className="planWindow-header">
          <p>
            {week[item.id]}
            {preview && " (preview)"}
          </p>
          <p>{item.name}</p>
        </div>
        {item.rows && (
          <>
            <div className="planWindow-content-row">
              <b>
                <p>Exercise</p>
              </b>
              <b>
                <p>Sets</p>
              </b>
              <b>
                <p>Reps</p>
              </b>
            </div>
            {item.rows.map((row) => (
              <div key={row.exercise} className="planWindow-content-row">
                <p>{row.exercise}</p>
                <p>{row.sets !== "" ? row.sets : "-"}</p>
                <p>{row.reps !== "" ? row.reps : "-"}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default PlanDayView;
