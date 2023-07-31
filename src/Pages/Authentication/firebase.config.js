// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyC27SrBDVDdFuM8bSBUPNsOPT-3m4ZAoD0",
  authDomain: "stackoverflowclone-78f17.firebaseapp.com",
  projectId: "stackoverflowclone-78f17",
  storageBucket: "stackoverflowclone-78f17.appspot.com",
  messagingSenderId: "597796395330",
  appId: "1:597796395330:web:535e908576ff6b73c310db",
  measurementId: "G-TJ68D16TDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);