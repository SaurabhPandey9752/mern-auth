// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8KW3JeGZk0QD5hKsiNuTT_YPS5h5gdnc",
  authDomain: "indigo-muse-393404.firebaseapp.com",
  projectId: "indigo-muse-393404",
  storageBucket: "indigo-muse-393404.appspot.com",
  messagingSenderId: "935602240200",
  appId: "1:935602240200:web:41c583c9fb0f7ea55103fd",
  measurementId: "G-4Y2W2ZVVYK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);