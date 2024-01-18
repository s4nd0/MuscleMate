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
      <p className="title">
        If you want change in your life, you've come to the right place
      </p>
      <img
        src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="woman lifting barbell"
      />
      <p className="title">
        We will take care of your discipline and help you manage your training
        plan
      </p>
      <img
        src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="dumbbells"
      />
      <p className="title">Join us!</p>
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
      <h2>
        By joining our application, you will gain access to creating and
        managing your training plan, viewing individually tailored statistics
        about your progress and much more!
      </h2>
    </div>
  );
};

export default Signup;
