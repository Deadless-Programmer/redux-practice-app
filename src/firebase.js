// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqjZqAoXeSCcOuPJthF98tHQ5WcRgnDos",
  authDomain: "auth-with-redux-94c24.firebaseapp.com",
  projectId: "auth-with-redux-94c24",
  storageBucket: "auth-with-redux-94c24.firebasestorage.app",
  messagingSenderId: "628262190187",
  appId: "1:628262190187:web:b11dd236ca4bc850cf852e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };