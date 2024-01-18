import React, { useState } from "react";

import { useLogin } from "../hooks/useLogin";

// styles
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, isPending, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="login">
      <p className="title">Welcome back!</p>
      <img
        src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hard work"
      />
      <p className="title">Log In</p>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        {!isPending && <button className="btn">Log in!</button>}
        {isPending && (
          <button disabled className="btn">
            Loading...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
