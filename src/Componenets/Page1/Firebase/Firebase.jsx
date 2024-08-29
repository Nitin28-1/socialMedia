import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "socialmediaapp-3d303.firebaseapp.com",
  projectId: "socialmediaapp-3d303",
  storageBucket: "socialmediaapp-3d303.appspot.com",
  messagingSenderId: "67003203155",
  appId: "1:67003203155:web:68674aec9177b19d1490a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore();
export const storage=getStorage();
