import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJVt6kFTGXVhqRBRfv_7IzwPPh4uU4kTc",
  authDomain: "facebook-clone-1c134.firebaseapp.com",
  projectId: "facebook-clone-1c134",
  storageBucket: "facebook-clone-1c134.appspot.com",
  messagingSenderId: "130172217070",
  appId: "1:130172217070:web:46e7c628ebeec8164575ff",
  measurementId: "${config.measurementId}",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
