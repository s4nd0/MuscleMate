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

  return (
    <div className="PlanWindow">
      <div className="planWindow-header">
        <p>Today:</p>
        <p>{plan[day].name}</p>
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
      <Link to="/plan" className="planWindow-btn btn">
        Show full plan
      </Link>
    </div>
  );
};

export default PlanWindow;
