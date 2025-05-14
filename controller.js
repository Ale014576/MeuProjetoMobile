// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS1dpBLA6BHtJUkZ5xjZxKvZbYP2bU-Do",
  authDomain: "aula2025sm.firebaseapp.com",
  projectId: "aula2025sm",
  storageBucket: "aula2025sm.firebasestorage.app",
  messagingSenderId: "318753187113",
  appId: "1:318753187113:web:ec6f11ed870170b1b78338"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
