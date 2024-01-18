import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();

  return (
    <div className="home">
      <h1>Hello, {user.displayName}!</h1>
      <p>
        Your training today will be based on training the upper chest and
        triceps. Here are your training records from last week
      </p>
    </div>
  );
};

export default Home;
