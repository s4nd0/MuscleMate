import React from "react";

// styles
import "./Plan.css";
import PlanDayTemplate from "../components/PlanDayTemplate";

const Plan = () => {
  const plan = [
    {
      id: 0,
      name: "Chest and Tricep",
      exercises: ["Chest Press", "Dumbbell Press", "Cable Crossover"],
      sets: [3, 3, 4],
      reps: [8, 10, 8],
    },
    {
      id: 1,
      name: "Rest Day",
    },
    {
      id: 2,
      name: "Bicep and Back",
      exercises: ["Hammer Curl", "Pull Up", "Bicep Curl"],
      sets: [4, 3, 3],
      reps: [10, 12, 8],
    },
    {
      id: 3,
      name: "Rest Day",
    },
    {
      id: 4,
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
      id: 5,
      name: "Rest Day",
    },
    {
      id: 6,
      name: "Rest Day",
    },
  ];

  return (
    <>
      {plan.map((item) => (
        <PlanDayTemplate item={item} key={item.id} />
      ))}
    </>
  );
};

export default Plan;
