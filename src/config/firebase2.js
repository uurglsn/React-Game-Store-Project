// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfrx28Y-dUPulV0trzlzCA4CuONA0vcfY",
  authDomain: "gamestore-63a72.firebaseapp.com",
  projectId: "gamestore-63a72",
  storageBucket: "gamestore-63a72.appspot.com",
  messagingSenderId: "628436117100",
  appId: "1:628436117100:web:ba73f9b1df094dd639da49",
  measurementId: "G-YE27BELJKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);