// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIVD5SCYkAvCGcPLUx0XhnMZvWooh4WaA",
  authDomain: "barodabucketlist-ef7eb.firebaseapp.com",
  projectId: "barodabucketlist-ef7eb",
  storageBucket: "barodabucketlist-ef7eb.appspot.com",
  messagingSenderId: "285316609370",
  appId: "1:285316609370:web:db41465a61e677164def63",
  measurementId: "G-KFE610JLZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);