import React from "react";

// styles
import "./CurrentDate.css";

const CurrentDate = ({ padding, subText }) => {
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = weekday[new Date().getDay()];

  return (
    <div className={padding ? "date pd-20" : "date"}>
      <p>{day < 10 ? `0${day}` : day}</p>
      <p>{month < 10 ? `0${month}` : month}</p>
      <p>{year}</p>
      <span>{dayName}</span>
      {subText && <span>{subText}</span>}
    </div>
  );
};

export default CurrentDate;
