
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "reacttschat-151e0.firebaseapp.com",
    projectId: "reacttschat-151e0",
    storageBucket: "reacttschat-151e0.firebasestorage.app",
    messagingSenderId: "348837203357",
    appId: "1:348837203357:web:52c9fbd6ad2d629343f374"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();