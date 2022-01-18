


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBirgIwDzDc3sGUzrCQmNSMVo72rfKRZFk",
  authDomain: "stream-feeds.firebaseapp.com",
  projectId: "stream-feeds",
  storageBucket: "stream-feeds.appspot.com",
  messagingSenderId: "773234007256",
  appId: "1:773234007256:web:c24d414c197786c5b6cbad",
  measurementId: "G-9NERW797RF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);