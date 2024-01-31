import { useState, useEffect, useRef } from "react";

// firebase imports
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null);
  const [document, setDocument] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const q = useRef(_q).current;

  useEffect(() => {
    let ref = collection(db, c);

    if (q) {
      ref = query(ref, where(...q));
    }

    const unsub = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setIsPending(false);
        setDocuments(results);
        setDocument(results[0]);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unsub();
  }, [c, q]);

  return { documents, document, isPending, error };
};
