// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi3Jf4tsWeQaHcsJgr5s6cV9471RMubas",
  authDomain: "netflixgpt-29d18.firebaseapp.com",
  projectId: "netflixgpt-29d18",
  storageBucket: "netflixgpt-29d18.appspot.com",
  messagingSenderId: "510829784634",
  appId: "1:510829784634:web:7dcd12471f130e3fbd4f03",
  measurementId: "G-9LS8DBWH21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth = getAuth();