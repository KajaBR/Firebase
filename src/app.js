import './../styles/styles.css';

console.log('Siemka z Webpack');

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmtkxpT_49DcfM9OiZQk_uCEnGjNAHbRQ",
  authDomain: "fir-sda-7dff6.firebaseapp.com",
  projectId: "fir-sda-7dff6",
  storageBucket: "fir-sda-7dff6.appspot.com",
  messagingSenderId: "17587696795",
  appId: "1:17587696795:web:7e549bd3fbe10c7e3c423e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);