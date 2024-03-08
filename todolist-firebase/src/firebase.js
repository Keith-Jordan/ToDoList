// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWWGt2158CthVcnAedkjdGTxshjORWIW4",
  authDomain: "todo-app-a8158.firebaseapp.com",
  projectId: "todo-app-a8158",
  storageBucket: "todo-app-a8158.appspot.com",
  messagingSenderId: "693131814987",
  appId: "1:693131814987:web:1380ee6d02bfe8f70485ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
