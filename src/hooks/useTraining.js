import { useState, useEffect, useRef } from "react";

// firebase imports
import {
  collection,
  onSnapshot,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase/config";

export const useTraining = (c, _q) => {
  const [document, setDocument] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const q = useRef(_q).current;

  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const timestamp = Timestamp.fromDate(now);

  useEffect(() => {
    let ref = collection(db, c);

    if (q) {
      ref = query(ref, where(...q));
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        if (doc.data().time.seconds > timestamp.seconds) {
          results.push({ ...doc.data(), id: doc.id });
        }
      });
      setIsPending(false);
      results && setDocument(results[0]);
    });

    return () => unsub();
  }, [c, q, timestamp.seconds]);

  return { document, isPending };
};
