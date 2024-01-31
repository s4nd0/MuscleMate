import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

// styles
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [errorNumber, setErrorNumber] = useState(null);

  const { error: signupError, isPending, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();

    handleErrors() === true
      ? signup(email, password, name)
      : console.log(`You can't sign up`);
  };

  const handleErrors = () => {
    if (email === "") {
      setError("Invalid E-mail");
      setErrorNumber(1);
      return false;
    }
    if (name === "") {
      setError("Name too short");
      setErrorNumber(2);
      return false;
    }
    if (password === "") {
      setError("Invalid password");
      setErrorNumber(3);
      return false;
    }
    return true;
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <label>
          <span>
            E-mail {errorNumber === 1 && <p className="error">{error}</p>}
          </span>
          <input
            style={errorNumber === 1 ? { backgroundColor: "#ff7b7b" } : null}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>
            First name {errorNumber === 2 && <p className="error">{error}</p>}
          </span>
          <input
            style={errorNumber === 2 ? { backgroundColor: "#ff7b7b" } : null}
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>
            Password {errorNumber === 3 && <p className="error">{error}</p>}
          </span>
          <input
            style={errorNumber === 3 ? { backgroundColor: "#ff7b7b" } : null}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        {!isPending && <button className="btn">Sign Up!</button>}
        {isPending && (
          <button disabled className="btn">
            Loading...
          </button>
        )}
        {signupError && <p className="error">{signupError}</p>}
      </form>
    </div>
  );
};

export default Signup;
