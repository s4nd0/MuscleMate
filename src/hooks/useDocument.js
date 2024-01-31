import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";

export const useDocument = (c, id) => {
  const [document, setDocument] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const update = async (items) => {
    const docRef = doc(db, c, id);
    updateDoc(docRef, items);
  };

  useEffect(() => {
    setIsPending(true);

    const docRef = doc(db, c, id);

    const unsub = onSnapshot(
      docRef,
      (doc) => {
        setDocument({ ...doc.data(), id: doc.id });
        setIsPending(false);
      },
      (error) => {
        setError(error.message);
        setIsPending(false);
      }
    );

    return () => unsub();
  }, [c, id]);

  return { document, isPending, error, update };
};
