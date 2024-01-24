import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

// styles
import "./Plan.css";
import PlanDayView from "../components/PlanDayView";

// firebase imports
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const Plan = () => {
  const [plan, setPlan] = useState(null);

  const { user } = useAuthContext();

  useEffect(() => {
    const ref = collection(db, "plans");
    getDocs(ref).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (doc.data().uid === user.uid) setPlan({ id: doc.id, ...doc.data() });
      });
    });
  }, [user.uid]);

  return (
    <>
      {plan &&
        plan.plan.map((item) => <PlanDayView item={item} key={item.id} />)}
    </>
  );
};

export default Plan;
