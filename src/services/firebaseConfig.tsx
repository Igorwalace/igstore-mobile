// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "igstore-mobile.firebaseapp.com",
    projectId: "igstore-mobile",
    storageBucket: "igstore-mobile.appspot.com",
    messagingSenderId: process.env.MESSAGIND_SENDER_ID,
    appId: process.env.APP_ID,
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);