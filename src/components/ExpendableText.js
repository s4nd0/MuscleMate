import React, { useState } from "react";

// components
import PlanTitle from "./PlanTitle";
import PlanContent from "./PlanContent";

// images
import ExpandIcon from "../images/expand-icon.svg";

const ExpendableText = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleExpand = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div onClick={handleExpand} className="expendable-text">
      <PlanTitle p1={title} addClass={isOpen && "reverse"} img={ExpandIcon} />
      <PlanContent text={isOpen && content} addClass={isOpen && "opened"} />
    </div>
  );
};

export default ExpendableText;
