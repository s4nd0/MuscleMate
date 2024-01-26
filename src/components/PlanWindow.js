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

  return (
    <div className="PlanWindow">
      <div className="planWindow-header today">
        <p>
          {plan[day].name !== "Rest Day"
            ? `Hello, ${user.displayName}! Today's workout is ${plan[day].name}`
            : `Hello, ${user.displayName}! You are resting today`}
        </p>
      </div>
      <div className="dark-bg">
        {plan[day].name !== "Rest Day" && (
          <Link to="/training" className="btn">
            Start training!
          </Link>
        )}
        {plan[day].name === "Rest Day" && (
          <Link to="/restday" className="btn">
            More about rest day
          </Link>
        )}
      </div>

      <PlanDayView item={plan[day]} />
      <div className="dark-bg">
        <Link to="/plan" className="btn">
          View full plan
        </Link>
      </div>

      <div className="dark-bg">
        <Link to="/records" className="btn">
          Check your training records
        </Link>
      </div>
    </div>
  );
};

export default PlanWindow;
