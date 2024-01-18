import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();

  return (
    <div className="home">
      <h1>Hello, {user.displayName}!</h1>
      <p></p>
    </div>
  );
};

export default Home;
