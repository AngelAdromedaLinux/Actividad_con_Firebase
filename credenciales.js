// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEfn1gDmtkay8RsRiqR_DxVFeb29QHnqI",
  authDomain: "miloginindividual.firebaseapp.com",
  projectId: "miloginindividual",
  storageBucket: "miloginindividual.firebasestorage.app",
  messagingSenderId: "609561277155",
  appId: "1:609561277155:web:5f6e01e695b6218c9d0bd6",
  measurementId: "G-CCGSWZ4Z56"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase 