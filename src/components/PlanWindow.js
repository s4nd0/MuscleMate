import React from "react";

// styles
import "./PlanWindow.css";
import { Link } from "react-router-dom";

const PlanWindow = () => {
  const plan = [
    {
      name: "Chest and Tricep",
      exercises: ["Chest Press", "Dumbbell Press", "Cable Crossover"],
      sets: [3, 3, 4],
      reps: [8, 10, 8],
    },
    {
      name: "Rest Day",
    },
    {
      name: "Bicep and Back",
      exercises: ["Hammer Curl", "Pull Up", "Bicep Curl"],
      sets: [4, 3, 3],
      reps: [10, 12, 8],
    },
    {
      name: "Rest Day",
    },
    {
      name: "Legs and Shoulders",
      exercises: [
        "Lateral raises",
        "Face Pulls",
        "Barbel Squat",
        "Hip Thrusts",
      ],
      sets: [3, 3, 3, 4],
      reps: [12, 12, 10, 8],
    },
    {
      name: "Rest Day",
    },
    {
      name: "Rest Day",
    },
  ];

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
    <div className="PlanWindow">
      {plan[day].name !== "Rest Day" && (
        <>
          <div className="planWindow-header today">
            <p>Today!</p>
            <p>{plan[day].name}</p>
          </div>
          <Link to="/training" className="planWindow-btn btn">
            Start training!
          </Link>
        </>
      )}

      <div className="planWindow-header">
        <p>{today}</p>
      </div>
      <div className="planWindow-content">
        {plan[day].exercises && (
          <>
            <p>Exercises:</p>
            <ul>
              <li>{plan[day].exercises[0]}</li>
              {plan[day].exercises[1] && <li>{plan[day].exercises[1]}</li>}
              {plan[day].exercises[2] &&
                (plan[day].exercises[3] ? (
                  <li>{plan[day].exercises.length - 2} more...</li>
                ) : (
                  <li>{plan[day].exercises[2]}</li>
                ))}
            </ul>
          </>
        )}
        {plan[day].name === "Rest Day" && (
          <p>
            During a rest day, you can engage in activities that promote
            recovery and relaxation. Click the button below to find out more!
          </p>
        )}
      </div>
      {plan[day].name !== "Rest Day" && (
        <Link to="/plan" className="planWindow-btn btn">
          View full plan
        </Link>
      )}
      {plan[day].name === "Rest Day" && (
        <Link to="/restday" className="planWindow-btn btn">
          More about rest day
        </Link>
      )}
    </div>
  );
};

export default PlanWindow;
