// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjTz_93iXVpJLrR2jCaihUgYQ-bVVmGpI",
  authDomain: "mindfulmoments-3a2c8.firebaseapp.com",
  projectId: "mindfulmoments-3a2c8",
  storageBucket: "mindfulmoments-3a2c8.firebasestorage.app",
  messagingSenderId: "48353575308",
  appId: "1:48353575308:web:0e9455b82dad842198d6a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export the db instance
export { db };