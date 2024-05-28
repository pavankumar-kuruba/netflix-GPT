// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATB2B6YJThkqccRLW0_mydG_Ts1dmxh3o",
  authDomain: "netflixgpt-eff10.firebaseapp.com",
  projectId: "netflixgpt-eff10",
  storageBucket: "netflixgpt-eff10.appspot.com",
  messagingSenderId: "639199334870",
  appId: "1:639199334870:web:e8c4215d6f055e4c291477",
  measurementId: "G-WDXSSQZVGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();