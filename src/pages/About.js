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
      <a
        className="link"
        href="https://github.com/s4nd0/MuscleMate"
        target="_blank"
        rel="noreferrer"
      >
        Link to the GitHub repository
      </a>
      <h3>
        A <big>MuscleMate</big> application is designed to efficiently organize
        and optimize workout plans, helping users achieve their fitness goals.
        The application provides a user-friendly interface to create, track, and
        adjust training routines, ensuring users can maintain consistency and
        effectiveness in their workouts.
      </h3>
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
