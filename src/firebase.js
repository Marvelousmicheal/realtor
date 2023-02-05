// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGSRlLyfRdvwe6kLWlAoU5z7wDonpqwR0",
  authDomain: "logees-webapp.firebaseapp.com",
  projectId: "logees-webapp",
  storageBucket: "logees-webapp.appspot.com",
  messagingSenderId: "498423208461",
  appId: "1:498423208461:web:513bdbf6aa9eca48f01344",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
