import React from "react";

// styles
import "../components/PlanWindow.css";

// hooks
import { useCollection } from "../hooks/useCollection";
import ExpendableText from "../components/ExpendableText";
import CenterText from "../components/CenterText";

const Restday = () => {
  const {
    document: plan,
    isPending,
    error,
  } = useCollection("data", ["name", "==", "restday"]);

  return (
    <div className="planWindow">
      {isPending && <CenterText value={"Loading..."} />}
      {plan &&
        !isPending &&
        plan.text.map((item) => (
          <ExpendableText
            key={item.title}
            title={item.title}
            content={item.content}
          />
        ))}
      {error && <CenterText value={error} />}
    </div>
  );
};

export default Restday;
