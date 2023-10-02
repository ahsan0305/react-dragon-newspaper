// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMCQlG_uvD4yUkCmhKxB_53XPOEza_jg0",
  authDomain: "react-dragon-newspaper.firebaseapp.com",
  projectId: "react-dragon-newspaper",
  storageBucket: "react-dragon-newspaper.appspot.com",
  messagingSenderId: "651607187958",
  appId: "1:651607187958:web:c8a2cc4efaa7263f33e7d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth