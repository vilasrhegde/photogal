

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp  } from 'firebase/firestore';// TODO: Add SDKs for Firebase products that you want to use
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjxfLc3WuSIyQH7nQkIYVoBgQNsHty8hw",
  authDomain: "photogal-95114.firebaseapp.com",
  projectId: "photogal-95114",
  storageBucket: "photogal-95114.appspot.com",
  messagingSenderId: "1056679737398",
  appId: "1:1056679737398:web:166a31c8c6f70258438097"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);
const db = getFirestore();


export {  projectStorage,db}