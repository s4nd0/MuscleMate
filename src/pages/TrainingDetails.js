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

const TrainingDetails = () => {
  const [rate, setRate] = useState(3);
  const [day, setDay] = useState(0);
  const { user } = useAuthContext();
  const { id } = useParams();
  const { document, error, isPending, update } = useDocument("trainings", id);

  const { document: plan, isPending: planIsPending } = useCollection("plans", [
    "uid",
    "==",
    user.uid,
  ]);

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
    console.log("finished. Rate: ", rate);
    update({ rate: rate, finished: true });
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
      {error && <CenterText text={error} src={EmojiSad} alt={"sad emoji"} />}
      {!error && !isPending && (
        <PlanTitle
          p1={`${week[day]}`}
          p2={`Training session`}
          addClass={"pd-20"}
        />
      )}
      {!isPending &&
        !error &&
        !planIsPending &&
        plan &&
        plan.plan[day].rows.map((exercise) => (
          <ExpendableExercise
            key={exercise.exercise}
            exercise={exercise.exercise}
            sets={exercise.sets}
            reps={exercise.reps}
          />
        ))}
      {plan && document && (
        <>
          {document.finished === false && (
            <Rating finished={false} setRate={setRate} rate={rate} />
          )}
          {document.finished === true && (
            <Rating finished={true} rate={document.rate} />
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
