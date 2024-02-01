import React from "react";

// components
import PlanTitle from "./PlanTitle";
import SmallContentWindow from "./SmallContentWindow";

// styles
import "./ExpendableExercise.css";

const ExpendableExercise = ({ exercise, sets, reps }) => {
  return (
    <div className="expendable-exercise">
      <PlanTitle p1={`${exercise}`} />
      <div className="expendable-exercise-content">
        <SmallContentWindow
          text={sets !== "" ? "Sets" : "No sets given"}
          value={sets !== "" ? sets : ""}
          color={"secondary"}
        />
        <SmallContentWindow
          text={reps !== "" ? "Reps" : "To failure"}
          value={reps !== "" ? reps : ""}
          color={"purple"}
        />
      </div>
    </div>
  );
};

export default ExpendableExercise;
