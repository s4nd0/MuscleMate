import React from "react";

// styles
import "./PlanWindow.css";
import { Link } from "react-router-dom";

const PlanDayTemplate = ({ item }) => {
  const day = new Date().getDay() - 1 < 0 ? 6 : new Date().getDay() - 1;
  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const today = week[day];

  return (
    <>
      <div className="PlanWindow">
        <div
          className={
            today === week[item.id]
              ? "planWindow-header today"
              : "planWindow-header"
          }
        >
          <p>{today === week[item.id] ? "Today!" : week[item.id]}</p>
          <p>{item.name}</p>
        </div>
        {item.exercises && (
          <div className="planWindow-content">
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
        )}
        <div className="planWindow-content">
          {item.exercises && (
            <ul className="planWindow-content-names">
              {item.exercises.map((exercise) => (
                <li key={Math.random()}>{exercise}</li>
              ))}
            </ul>
          )}
          {item.sets && (
            <ul>
              {item.sets.map((set) => (
                <li key={Math.random()}>{set}</li>
              ))}
            </ul>
          )}
          {item.reps && (
            <ul>
              {item.reps.map((rep) => (
                <li key={Math.random()}>{rep}</li>
              ))}
            </ul>
          )}

          {item.name === "Rest Day" && (
            <p>
              During a rest day, you can engage in activities that promote
              recovery and relaxation.
            </p>
          )}
        </div>
        {today === week[item.id] && item.exercises && (
          <Link to="/training" className="planWindow-btn btn">
            Start training!
          </Link>
        )}
        {today === week[item.id] && item.name === "Rest Day" && (
          <Link to="/restday" className="planWindow-btn btn">
            more about rest day
          </Link>
        )}
      </div>
    </>
  );
};

export default PlanDayTemplate;
