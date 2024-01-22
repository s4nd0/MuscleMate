import React from "react";

// styles
import "./CreatePlanWindow.css";

// images
import plus from "../images/icons8-plus.svg";

const CreatePlanWindow = () => {
  return (
    <div className="createPlanWindow">
      <img src={plus} alt="plus-icon" />
      <p>Create your training plan!</p>
    </div>
  );
};

export default CreatePlanWindow;
