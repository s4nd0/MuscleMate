import React from "react";

// style
import "./SingleRecord.css";

// components
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const SingleRecord = ({ item }) => {
  const navigate = useNavigate();
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekDay = new Date(item.time.seconds * 1000).getDay();
  const day = new Date(item.time.seconds * 1000).getDate();
  const month = new Date(item.time.seconds * 1000).getMonth();
  const year = new Date(item.time.seconds * 1000).getFullYear();
  const date = `${week[weekDay]} ${
    day === 1
      ? `${day}st`
      : day === 2
      ? `${day}nd`
      : day === 3
      ? `${day}td`
      : `${day}th`
  } ${months[month]} ${year}`;

  const textSlice = (text, max) => {
    if (text.length <= max) {
      return text;
    } else {
      return text.slice(0, max) + "...";
    }
  };

  const handleClick = () => {
    navigate(`/training/${item.id}`);
  };

  return (
    <div className="single-record">
      <div className="single-record-header">
        <p className="single-record-header-name">
          {item.trainingPlan ? item.trainingPlan.name : "Training name"}
        </p>
        <p className="single-record-header-date">{date}</p>
        <p className="single-record-header-finished">
          Finished:{" "}
          {item.finished ? (
            <span className="green-text">YES</span>
          ) : (
            <span className="red-text">NO</span>
          )}
        </p>
      </div>
      <div className="single-record-note">{textSlice(item.note, 150)}</div>
      <div className="single-record-footer">
        <Button text={"View this training"} onClick={handleClick} />
      </div>
    </div>
  );
};

export default SingleRecord;
