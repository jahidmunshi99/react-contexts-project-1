import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXeR8rZQQjJ8rIOimgL23jvdQ-CVP-X2s",
  authDomain: "proghive-students-registration.firebaseapp.com",
  projectId: "proghive-students-registration",
  storageBucket: "proghive-students-registration.firebasestorage.app",
  messagingSenderId: "253745183860",
  appId: "1:253745183860:web:be32ca77a1c0524b556521"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;