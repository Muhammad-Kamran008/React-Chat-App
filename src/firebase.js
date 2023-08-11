import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdBTzokkuBl_eDPDVC2meSJHE7v8pvdzA",
  authDomain: "chat-app-7b01d.firebaseapp.com",
  projectId: "chat-app-7b01d",
  storageBucket: "chat-app-7b01d.appspot.com",
  messagingSenderId: "878658098477",
  appId: "1:878658098477:web:5673b5aab54c7503ed6fa4",
  measurementId: "G-JYNS30JNJQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
