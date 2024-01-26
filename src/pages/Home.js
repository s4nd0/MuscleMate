import React, { useState } from "react";

// components
import PlanWindow from "../components/PlanWindow";
import { Link } from "react-router-dom";

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
              <div className="planWindow-header">
                <p>It looks like you don't have a plan...</p>
              </div>
              <div className="dark-bg">
                <Link className="btn" to="/create">
                  Create your plan!
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
