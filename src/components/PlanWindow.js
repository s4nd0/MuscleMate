import React from "react";
import { Link } from "react-router-dom";
import PlanDayView from "./PlanDayView";
import { useAuthContext } from "../hooks/useAuthContext";

// styles
import "./PlanWindow.css";

const PlanWindow = ({ data }) => {
  const { plan } = data;
  const { user } = useAuthContext();
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
            <p>
              Hello, {user.displayName}! Today's workout is {plan[day].name}
            </p>
          </div>
          <div className="dark-bg">
            <Link to="/training" className="btn">
              Start training!
            </Link>
          </div>
        </>
      )}

      <PlanDayView item={plan[day]} />
      {plan[day].name !== "Rest Day" && (
        <div className="dark-bg">
          <Link to="/plan" className="btn">
            View full plan
          </Link>
        </div>
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
