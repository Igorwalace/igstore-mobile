// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCK25kLCakrHp0MzO70qO43xvm0Kz9mJdw",
    authDomain: "igstore-mobile.firebaseapp.com",
    projectId: "igstore-mobile",
    storageBucket: "igstore-mobile.appspot.com",
    messagingSenderId: "598791223944",
    appId: "1:598791223944:web:d88bb3f49a3eceaf607d3d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);