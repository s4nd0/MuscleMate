import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// styles
import "./Plan.css";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";

// components
import ConfirmModal from "../components/ConfirmModal";
import PlanDayView from "../components/PlanDayView";
import Button from "../components/Button";

// firebase imports
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import CenterText from "../components/CenterText";

const Plan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useAuthContext();
  const navigate = useNavigate();

  const {
    document: plan,
    error,
    isPending,
  } = useCollection("plans", ["uid", "==", user.uid]);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    setIsModalOpen(false);
    const ref = doc(db, "plans", plan.id);
    await deleteDoc(ref);
    navigate("/");
  };

  const handleUpdate = () => {
    navigate("/create");
  };

  return (
    <>
      {isPending && <CenterText value={"Loading..."} />}
      {plan && (
        <div>
          {plan.plan.map((item) => (
            <PlanDayView item={item} key={item.id} />
          ))}

          <Button onClick={handleUpdate} text={"Edit plan"} />
          <Button
            onClick={handleClick}
            text={"DELETE PLAN"}
            addClass={"delete"}
          />

          <ConfirmModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            logic={handleDelete}
            question={
              "Are you sure you want to delete your training plan? It will no longer be possible to recover it!"
            }
            yes={"Delete"}
            no={"Come back"}
          />
        </div>
      )}
      {error && <CenterText value={error} />}
    </>
  );
};

export default Plan;
