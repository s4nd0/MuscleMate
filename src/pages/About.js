import React from "react";

// styles
import "./About.css";
import { useAuthContext } from "../hooks/useAuthContext";

const About = () => {
  const { user } = useAuthContext();

  return (
    <div className="about">
      <h3>
        MuscleMate is my first individual project using React and Firebase.
      </h3>

      <h3>A MuscleMate application:</h3>
      <ul>
        <li>efficiently organize and optimize workout plans</li>
        <li>helps users achieve their fitness goals</li>
        <li>
          provides a user-friendly interface to create, track, and adjust
          training routines
        </li>
        <li>
          ensuring users can maintain consistency and effectiveness in their
          workouts
        </li>
      </ul>
      <a
        className="link"
        href="https://github.com/s4nd0/MuscleMate"
        target="_blank"
        rel="noreferrer"
      >
        Click to go to the GitHub repository
      </a>

      {!user && (
        <h3>
          Create an account to learn all the secrets of the application and take
          matters into your own hands!
        </h3>
      )}
    </div>
  );
};

export default About;
