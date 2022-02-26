// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhpl03A__aZuwelBcOs15E3bk-EW7SCVg",
  authDomain: "armucura-ec6bb.firebaseapp.com",
  projectId: "armucura-ec6bb",
  storageBucket: "armucura-ec6bb.appspot.com",
  messagingSenderId: "344066069677",
  appId: "1:344066069677:web:91469182a7dcb46e90e224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);