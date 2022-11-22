// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWzNylLEmk0ZjFo4mbg-sgEpqn6IVTViw",
  authDomain: "chat-test-da4a7.firebaseapp.com",
  projectId: "chat-test-da4a7",
  storageBucket: "chat-test-da4a7.appspot.com",
  messagingSenderId: "710474082083",
  appId: "1:710474082083:web:eb747c154cf49d0b3d4e96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db = getFirestore(app)