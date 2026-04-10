// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3qZZOKBDlYFpPeS0wfklx_79jm0bBKAs",
  authDomain: "house-marketplace-app-db5a1.firebaseapp.com",
  projectId: "house-marketplace-app-db5a1",
  storageBucket: "house-marketplace-app-db5a1.firebasestorage.app",
  messagingSenderId: "751387297833",
  appId: "1:751387297833:web:18141370dc40cbf61db438"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);