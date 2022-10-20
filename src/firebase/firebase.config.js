// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH_cbM_CgsFY31HfrNpIL3f4qvebaeoJA",
  authDomain: "auth-hotel-burji-arab.firebaseapp.com",
  projectId: "auth-hotel-burji-arab",
  storageBucket: "auth-hotel-burji-arab.appspot.com",
  messagingSenderId: "504589499618",
  appId: "1:504589499618:web:7df0bd462ae7e9df46b2bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;