// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXeR8rZQQjJ8rIOimgL23jvdQ-CVP-X2s",
  authDomain: "proghive-students-registration.firebaseapp.com",
  projectId: "proghive-students-registration",
  storageBucket: "proghive-students-registration.firebasestorage.app",
  messagingSenderId: "253745183860",
  appId: "1:253745183860:web:be32ca77a1c0524b556521",
  measurementId: "G-FW01XSW0EQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
