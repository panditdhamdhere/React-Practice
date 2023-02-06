// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8fsqAHBviMNGnpGBKZhf1Tar3ZQq5dpc",
  authDomain: "filmyverse-7682e.firebaseapp.com",
  projectId: "filmyverse-7682e",
  storageBucket: "filmyverse-7682e.appspot.com",
  messagingSenderId: "544083036138",
  appId: "1:544083036138:web:e76a3c2d42e17584cc9493"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db , "movies")
export default app;