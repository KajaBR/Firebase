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
import { getStorage } from "firebase/storage";
const storage = getStorage(app);
const url = "https://firebasestorage.googleapis.com/v0/b/fir-sda-7dff6.appspot.com/o/Test%2F312360517_1340931083400403_6255894437548427742_n.jpg?alt=media&token=1086124e-3bb0-47ea-9fc2-6601229c6c6f";

// przechowuje element html
const img = document.createElement("img");

img.setAttribute("src", url);
// img.src=url to samo co wyzej
document.body.appendChild(img);

// PROMISE
const mojaPupaJson = fetch().then((pupa123) => {
  return pupa123.json()
});
//const mojaPupaJson = fetch().then((pupa123) => pupa123.json());
mojaPupaJson.then((data) => console.log(data)) //ta linia bedzie działać z 
// DWOMA LINIJKAMI NA SAMEJ GÓRZE i z tą 
// która znajduje się bezpośrednio nad nią 

fetch()
.then((pupa123) => pupa123.json())
.then((data) => console.log(data));


// asynk



// await
