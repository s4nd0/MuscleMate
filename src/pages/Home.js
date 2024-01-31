import React from "react";

// components
import PlanWindow from "../components/PlanWindow";
import PlanTitle from "../components/PlanTitle";
import RouteButton from "../components/RouteButton";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";

const Home = () => {
  const { user } = useAuthContext();

  const { document: plan, isPending } = useCollection("plans", [
    "uid",
    "==",
    user.uid,
  ]);

  return (
    <>
      {!isPending && (
        <div className="home">
          {plan && <PlanWindow data={plan} />}
          {!plan && (
            <div className="PlanWindow">
              <PlanTitle p1={`It looks like you don't have a plan...`} />
              <RouteButton route={"/create"} text={"Create your plan!"} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
