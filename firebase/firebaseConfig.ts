import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  //apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  //authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  //projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  //appId: process.env.REACT_APP_FIREBASE_APP_ID,
  //measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyBwkKB0F-HgjI3tByPhT25NRCUinorFhvg",
  authDomain: "csinewsletter.firebaseapp.com",
  projectId: "csinewsletter",
  storageBucket: "csinewsletter.appspot.com",
  messagingSenderId: "663310915306",
  appId: "1:663310915306:web:cd63d71e48e443618a2993",
  measurementId: "G-C42K97QJ03",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
