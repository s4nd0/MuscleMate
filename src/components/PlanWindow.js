import React from "react";

// styles
import "./PlanWindow.css";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";

// components
import PlanDayView from "./PlanDayView";
import PlanTitle from "./PlanTitle";
import RouteButton from "./RouteButton";

const PlanWindow = ({ data }) => {
  const { plan } = data;
  const { user } = useAuthContext();

  const day = new Date().getDay() - 1 < 0 ? 6 : new Date().getDay() - 1;

  return (
    <div className="PlanWindow">
      <PlanTitle
        p1={
          plan[day].name !== "Rest Day"
            ? `Hello, ${user.displayName}! Today's workout is ${plan[day].name}`
            : `Hello, ${user.displayName}! You are resting today`
        }
        addClass={"today"}
      />
      {plan[day].name !== "Rest Day" ? (
        <RouteButton route={"/training"} text={"Start training!"} />
      ) : (
        <RouteButton route={"/restday"} text={"More about rest day"} />
      )}

      <PlanDayView item={plan[day]} />
      <RouteButton route={"/plan"} text={"View full plan"} />
      <RouteButton route={"/records"} text={"Check your training records"} />
    </div>
  );
};

export default PlanWindow;
