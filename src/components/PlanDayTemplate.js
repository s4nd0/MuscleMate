import React from "react";

// styles
import "./PlanDayTemplate.css";
import { Link } from "react-router-dom";

const PlanDayTemplate = ({ item }) => {
  const day = new Date().getDay() - 1;
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
      <div className="plan-template">
        <div
          className={
            today === week[item.id]
              ? "plan-template-header today"
              : "plan-template-header"
          }
        >
          <p>{today === week[item.id] ? "Today!" : week[item.id]}</p>
          <p>{item.name}</p>
        </div>
        {item.exercises && (
          <div className="plan-template-content">
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
        <div className="plan-template-content">
          {item.exercises && (
            <ul className="plan-template-content-names">
              {item.exercises.map((exercise) => (
                <li>{exercise}</li>
              ))}
            </ul>
          )}
          {item.sets && (
            <ul>
              {item.sets.map((set) => (
                <li>{set}</li>
              ))}
            </ul>
          )}
          {item.reps && (
            <ul>
              {item.reps.map((rep) => (
                <li>{rep}</li>
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
          <Link to="/training" className="plan-template-column-btn btn">
            Start training!
          </Link>
        )}
        {today === week[item.id] && item.name === "Rest Day" && (
          <Link to="/restday" className="plan-template-column-btn btn">
            more about rest day
          </Link>
        )}
      </div>
    </>
  );
};

export default PlanDayTemplate;
