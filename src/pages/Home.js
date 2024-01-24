import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

// components
import PlanWindow from "../components/PlanWindow";
import { Link } from "react-router-dom";

// firebase imports
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  const [plan, setPlan] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const { user } = useAuthContext();

  useEffect(() => {
    const ref = collection(db, "plans");
    getDocs(ref).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (doc.data().uid === user.uid) {
          setPlan({ id: doc.id, ...doc.data() });
        }
        setIsPending(false);
      });
    });
  }, [user.uid]);

  return (
    <>
      {!isPending && (
        <div className="home">
          {plan && <PlanWindow data={plan} />}
          {!plan && (
            <div className="PlanWindow">
              <div className="planWindow-header">
                <p>Create your training plan!</p>
              </div>

              <Link className="planWindow-btn btn" to="/create">
                Create
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
