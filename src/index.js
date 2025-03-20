// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0EynArQ-TibFIhjkMFp9QQUzF5ZDrMS4",
  authDomain: "movix-cf647.firebaseapp.com",
  projectId: "movix-cf647",
  storageBucket: "movix-cf647.firebasestorage.app",
  messagingSenderId: "734831548670",
  appId: "1:734831548670:web:7e97cecde6376395ce2daf",
  measurementId: "G-TX8SP0VLPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);