// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHz0X1eBgvKzDLuEDP2hkBTkVOpkXY2c8",
  authDomain: "donation-firebase-416b7.firebaseapp.com",
  projectId: "donation-firebase-416b7",
  storageBucket: "donation-firebase-416b7.appspot.com",
  messagingSenderId: "289249082474",
  appId: "1:289249082474:web:05ad46811296b1f60a5e13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;