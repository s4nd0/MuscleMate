import { useState, useEffect, useRef } from "react";

// firebase imports
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config";

export const useCollection = (c, _q, _o) => {
  const [documents, setDocuments] = useState(null);
  const [document, setDocument] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const q = useRef(_q).current;
  const o = useRef(_o).current;

  useEffect(() => {
    let ref = collection(db, c);

    if (q) {
      ref = query(ref, where(...q));
    }
    if (o) {
      ref = query(ref, orderBy(...o));
    }

    const unsub = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(results);
        setDocument(results[0]);
        setIsPending(false);
      },
      (error) => {
        setError(error.message);
        setIsPending(false);
      }
    );

    return () => unsub();
  }, [c, q, o]);

  return { documents, document, isPending, error };
};
