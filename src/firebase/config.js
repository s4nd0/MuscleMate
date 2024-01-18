import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs2TO1qZVS_p7M6j-7lM9zARP04IaSy2o",
  authDomain: "musclemate-68906.firebaseapp.com",
  projectId: "musclemate-68906",
  storageBucket: "musclemate-68906.appspot.com",
  messagingSenderId: "768233810634",
  appId: "1:768233810634:web:ebba0aba79f713acd62233",
  measurementId: "G-Q06EJ1BTP1",
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

export { db, auth };
