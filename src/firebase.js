// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// import { getAnalytics } from "firebase/analytics";
// import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCpIUrVz5kb_3R9MpJPAun6wTCUnlQpmbM",
//   authDomain: "otp-generate-f9701.firebaseapp.com",
//   projectId: "otp-generate-f9701",
//   storageBucket: "otp-generate-f9701.appspot.com",
//   messagingSenderId: "547641306681",
//   appId: "1:547641306681:web:202187fca869ab39d867e8"
// };
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
firebase.initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
export const storage = firebase.storage();
// const analytics = getAnalytics(app);

