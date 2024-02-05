import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// styles
import "./TrainingDetails.css";

// hooks
import { useDocument } from "../hooks/useDocument";

// images
import EmojiSad from "../images/emoji-sad.svg";

// components
import CenterText from "../components/CenterText";
import ExpendableExercise from "../components/ExpendableExercise";
import PlanTitle from "../components/PlanTitle";
import Button from "../components/Button";
import Rating from "../components/Rating";
import NoteField from "../components/NoteField";
import { doc } from "firebase/firestore";

const TrainingDetails = () => {
  const [rate, setRate] = useState(3);
  const [note, setNote] = useState("");
  const [day, setDay] = useState(0);
  const { id } = useParams();
  const { document, error, isPending, update } = useDocument("trainings", id);

  const navigate = useNavigate();

  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleFinish = () => {
    update({ rate: rate, finished: true, note: note });
    navigate("/records");
  };

  useEffect(() => {
    if (document) {
      const timestampDay = new Date(document.time.seconds * 1000).getDay();
      const day = timestampDay - 1 < 0 ? 6 : timestampDay - 1;
      setDay(day);
      setNote(document.note);
      setRate(document.rate);
    }
  }, [document]);

  return (
    <div className="training-details">
      {error && <CenterText value={error} src={EmojiSad} alt={"sad emoji"} />}
      {!error && !isPending && (
        <PlanTitle
          p1={`${week[day]}`}
          p2={`Training session`}
          addClass={"pd-20"}
        />
      )}
      {!isPending &&
        !error &&
        document.trainingPlan.rows &&
        document.trainingPlan.rows.map((exercise) => (
          <ExpendableExercise
            key={exercise.exercise}
            exercise={exercise.exercise}
            sets={exercise.sets}
            reps={exercise.reps}
          />
        ))}
      {isPending && <CenterText value="loading..." />}
      {document && (
        <>
          <NoteField
            setNote={setNote}
            note={note}
            placeholder="Write a note about your training.."
          />
          <Rating setRate={setRate} rate={rate} />
          <Button onClick={handleFinish} text={"Finish training"} />
        </>
      )}
    </div>
  );
};

export default TrainingDetails;
