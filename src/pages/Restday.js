import React from "react";

// styles
import "../components/PlanWindow.css";

// hooks
import { useCollection } from "../hooks/useCollection";
import ExpendableText from "../components/ExpendableText";

const Restday = () => {
  const { document: plan, isPending } = useCollection("data", [
    "name",
    "==",
    "restday",
  ]);

  return (
    <div className="planWindow">
      {plan &&
        plan.text.map((item) => (
          <ExpendableText
            key={item.title}
            title={item.title}
            content={item.content}
          />
        ))}
    </div>
  );
};

export default Restday;
