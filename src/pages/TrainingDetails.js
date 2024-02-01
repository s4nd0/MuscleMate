import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// styles
import "./TrainingDetails.css";

// hooks
import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";
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

const TrainingDetails = () => {
  const [rate, setRate] = useState(3);
  const [note, setNote] = useState("");
  const [day, setDay] = useState(0);
  const { id } = useParams();
  const { document, error, isPending, update } = useDocument("trainings", id);

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
  };

  useEffect(() => {
    if (document) {
      const timestampDay = new Date(document.time.seconds * 1000).getDay();
      const day = timestampDay - 1 < 0 ? 6 : timestampDay - 1;
      setDay(day);
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
      {document && (
        <>
          {document.finished === false && (
            <>
              <NoteField
                setNote={setNote}
                note={note}
                placeholder="Write a note about your training.."
              />
              <Rating finished={false} setRate={setRate} rate={rate} />
            </>
          )}
          {document.finished === true && (
            <>
              <NoteField
                finished={true}
                note={document.note}
                placeholder="No notes..."
              />
              <Rating finished={true} rate={document.rate} />
            </>
          )}
          {document.finished === false && (
            <Button
              onClick={handleFinish}
              text={"Finish training"}
              disabled={rate ? false : true}
            />
          )}
        </>
      )}
    </div>
  );
};

export default TrainingDetails;
