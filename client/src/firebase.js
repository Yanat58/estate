// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-79922.firebaseapp.com",
  projectId: "estate-79922",
  storageBucket: "estate-79922.appspot.com",
  messagingSenderId: "55162067400",
  appId: "1:55162067400:web:540ce413c3f861c94c48fd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
