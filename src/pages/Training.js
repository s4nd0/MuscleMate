import React from "react";

// styles
import "./Training.css";
import "../components/PlanWindow.css";

// hooks
import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";

const Training = () => {
  const { user } = useAuthContext();
  const { document: plan, isPending } = useCollection("plans", [
    "uid",
    "==",
    user.uid,
  ]);

  return (
    <div className="training">
      <div className="planWindow-header">
        <p></p>
      </div>
    </div>
  );
};

export default Training;
