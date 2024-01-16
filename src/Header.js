import React from "react";
import { Link } from "react-router-dom";

// components
import Logo from "./components/Logo";

const Header = () => {
  const dayOfTheWeek = new Date().getDay() - 1;
  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const date = new Date().getDate();

  return (
    <header>
      <Logo />
      <nav>
        <ul>
          {!false && (
            <>
              <li className="btn">
                <Link to="/login">Login</Link>
              </li>
              <li className="btn">
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}
          {false && (
            <>
              <li>
                {week[dayOfTheWeek]}, {date}
                {date === 1
                  ? "st"
                  : date === 2
                  ? "nd"
                  : date === 3
                  ? "rd"
                  : "th"}
              </li>
              <li>
                <button className="btn">Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
