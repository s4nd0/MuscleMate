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

// firebase imports
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

const Plan = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useAuthContext();
  const navigate = useNavigate();

  const { document: plan } = useCollection("plans", ["uid", "==", user.uid]);

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
      {plan && (
        <div>
          {plan.plan.map((item) => (
            <PlanDayView item={item} key={item.id} />
          ))}

          <div className="dark-bg">
            <button onClick={handleUpdate} className="btn">
              Edit plan
            </button>
          </div>

          <div className="dark-bg">
            <button onClick={handleClick} className="btn delete">
              DELETE PLAN
            </button>
          </div>

          <ConfirmModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            handleDelete={handleDelete}
            question={
              "Are you sure you want to delete your training plan? It will no longer be possible to recover it!"
            }
            yes={"Delete"}
            no={"Come back"}
          />
        </div>
      )}
    </>
  );
};

export default Plan;
