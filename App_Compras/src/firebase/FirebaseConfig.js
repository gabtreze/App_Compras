// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByPI2-1TMuBKeOUCq7tX3VjWb9aY2FotQ",
  authDomain: "app-compras-a66df.firebaseapp.com",
  databaseURL: "https://app-compras-a66df-default-rtdb.firebaseio.com",
  projectId: "app-compras-a66df",
  storageBucket: "app-compras-a66df.appspot.com",
  messagingSenderId: "572776546861",
  appId: "1:572776546861:web:aa6d3712417e4385946ea4",
  measurementId: "G-JTJS1LGP1E"
};

// Initialize Firebase
export const Firebase_App = initializeApp(firebaseConfig);
export const Firebase_Auth = getAuth(Firebase_App);

