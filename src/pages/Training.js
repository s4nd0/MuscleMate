import React from "react";
import { useNavigate } from "react-router-dom";

// styles
import "./Training.css";
import "../components/PlanWindow.css";

// hooks
import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";
import { useTraining } from "../hooks/useTraining";

// components
import DisplaySinglePlan from "../components/DisplaySinglePlan";
import Button from "../components/Button";
import CurrentDate from "../components/CurrentDate";
import CenterText from "../components/CenterText";

// firebase imports
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";

// images
import EmojiSad from "../images/emoji-sad.svg";

const Training = () => {
  const { user } = useAuthContext();
  const { document: plan, isPending } = useCollection("plans", [
    "uid",
    "==",
    user.uid,
  ]);
  const { document: training, isPending: trainingIsPending } = useTraining(
    "trainings",
    ["uid", "==", user.uid]
  );

  const navigate = useNavigate();

  const time = Timestamp.fromDate(new Date());
  const day = new Date().getDay() - 1 < 0 ? 6 : new Date().getDay() - 1;

  const handleStart = async () => {
    const newDoc = await addDoc(collection(db, "trainings"), {
      uid: user.uid,
      time: time,
      finished: false,
    });
    navigate(`/training/${newDoc.id}`);
  };

  const handleContinue = () => {
    navigate(`/training/${training.id}`);
  };

  return (
    <>
      {!isPending && !trainingIsPending && (
        <div className="training">
          {!training && plan.plan[day].exercises ? (
            <>
              <CurrentDate padding={true} subText={plan.plan[day].name} />
              <DisplaySinglePlan item={plan.plan[day]} />
              <Button onClick={handleStart} text={"START"} />
            </>
          ) : training ? (
            <>
              <CurrentDate padding={true} subText={plan.plan[day].name} />
              <DisplaySinglePlan item={plan.plan[day]} />
              <Button
                onClick={handleContinue}
                text={
                  training.finished
                    ? `You've already finished this training! Click to see it!`
                    : `Continue your training!`
                }
              />
            </>
          ) : (
            !plan.plan[day].exercises && (
              <CenterText
                value={`I'm sorry, but I didn't detect your training today`}
                src={EmojiSad}
                alt={"sad emoji"}
              />
            )
          )}
        </div>
      )}
    </>
  );
};

export default Training;
