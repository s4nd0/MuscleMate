import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";

// components
import PlanWindow from "../components/PlanWindow";
import CreatePlanWindow from "../components/CreatePlanWindow";

const Home = () => {
  const { user } = useAuthContext();

  return (
    <div className="home">
      {!false && <PlanWindow />}
      {false && <CreatePlanWindow />}
    </div>
  );
};

export default Home;
