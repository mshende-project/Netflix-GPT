// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJaL-g85dLnVigwWZNiC2Ek_duHgG-w3g",
  authDomain: "netflixgpt-a327b.firebaseapp.com",
  projectId: "netflixgpt-a327b",
  storageBucket: "netflixgpt-a327b.appspot.com",
  messagingSenderId: "467482989858",
  appId: "1:467482989858:web:a4a8f8b3a355cb21a5817b",
  measurementId: "G-S0GL2GTWMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();