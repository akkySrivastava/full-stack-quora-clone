// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDArVa0UjpW7PqmrsMWcjsS82QvezLCmg4",
  authDomain: "quora-clone-mern.firebaseapp.com",
  projectId: "quora-clone-mern",
  storageBucket: "quora-clone-mern.appspot.com",
  messagingSenderId: "182383235813",
  appId: "1:182383235813:web:fd9e0c34fcc0a4f07c7a0c",
  measurementId: "G-62KKTN74PZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
