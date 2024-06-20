// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANB92Mw4aUyYoHT4apVHGR4rE1Bnosu7M",
  authDomain: "medicine-inventory-5ebd2.firebaseapp.com",
  projectId: "medicine-inventory-5ebd2",
  storageBucket: "medicine-inventory-5ebd2.appspot.com",
  messagingSenderId: "121046427101",
  appId: "1:121046427101:web:358e020e0c425a2299c234"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()

export default app;