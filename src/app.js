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
import { getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";
const storage = getStorage(app);

// ZDJĘCIE
// const url = "https://firebasestorage.googleapis.com/v0/b/fir-sda-7dff6.appspot.com/o/Test%2F312360517_1340931083400403_6255894437548427742_n.jpg?alt=media&token=1086124e-3bb0-47ea-9fc2-6601229c6c6f";

// // przechowuje element html
// const img = document.createElement("img");

// img.setAttribute("src", url);
// // img.src = url to samo co wyzej
// document.body.appendChild(img);

// ćwiczenie - pobieranie danych

// fetch("https://reqres.in/api/users") // fetch domyślnie robi geta i pobiera jakieśdane 
// .then((daneZpromisa) => daneZpromisa.json())
// .then((daneZjson) => console.log(daneZjson.data));

// async function myFunc () {
//   const data = await fetch("https://reqres.in/api/users")
//   const users = await data.json();
//   console.log(users.data);
// }

// const file = document.getElementById("myFile").files[0];
// const imageRef = ref(storage, "imageNew.jpg");

// uploadBytes(imageRef, file).then((uploadResult) => {
//     console.log("Sukces!");
// })


// --------------------------------------------------------------------------------------
// przesłanie pliku z komputera do firebase
// const headerInfo = document.getElementById("myHeader");
// document.getElementById("btn").addEventListener("click", () => {
//   headerInfo.innerText = "Przesyłam zdjęcię ...";

//   const file = document.getElementById("myFile").files[0];
//   const imageRef = ref(storage, file.name);// plik bedzie miał tą samą nazwę 
//   // jak u nas na komputerze, jeśli chcemy stałą nazwę to zamiast file.name 
//   // piszemy daną nazwę w nawiasach

//   uploadBytes(imageRef, file).then(() => {
//     headerInfo.innerText = "Zdjęcie zostało przesłane!";
//   })

// });

// ----------------------------------------------------------------------
// aby użytkownik mógł zmieniać nazwę pliku
// 1. dodać input do html
// 2.pobrac z inputa
// 3.przekazać jako argument
// 4. callback do domyślnej nazwy pliku
// const headerInfo = document.getElementById("myHeader");
// const FileNameInput = document.getElementById("nameFile");
// document.getElementById("btn").addEventListener("click", () => {
//   headerInfo.innerText = "Przesyłam zdjęcię ...";

//   const file = document.getElementById("myFile").files[0];
//   let fileName = file.name; // jeśli użytkownik nic nie wpisze to plik bedzie się nazywał jak na komputerze

//   if(FileNameInput.value){
//     fileName = FileNameInput.value;
//   }
//   const imageRef = ref(storage, fileName);

//   uploadBytes(imageRef, file).then(() => {
//     headerInfo.innerText = "Zdjęcie zostało przesłane!"; })
// });

// ----------------------------------------------------------------------------
// // pobieranie zdjęć z firebase na stronę
// const imageRef = ref(storage, "tulip.jpg");
// getDownloadURL(imageRef).then(url => {
//   const img = document.createElement("img");
//   img.src = url;
//   img.style.width = "250px";
//   document.body.appendChild(img);
// })

// ----------------------------------------------------------------------------

// pobieranie zdjęć z firebase na stronę
// const headerInfo = document.getElementById("myHeader");
// const myShowFileNameInput = document.getElementById("myShowFileName");
// const showFilebtn = document.getElementById("show");

// showFilebtn.addEventListener("click", () =>{
//   const imageRef = ref(storage, myShowFileNameInput.value);
//   headerInfo.innerText = "";
//   getDownloadURL(imageRef).then(url => {
//     const img = document.createElement("img");//tu bedzie się wyświetlać ile razy klkniemy
//     //jeśli tą linijkę przeniesiemy wyżej bedzie się wyświetlac tylko raz bezwględu na to ile razy kliniemy
//     img.src = url;
//     img.style.width = "250px";
//     document.body.appendChild(img); 
//     // kiedy błędna nazwa niżej
//   }).catch(ex=>{
//     headerInfo.innerText = "Zdjęcie nie istnieje!";
//   });
// });


// ------------------------------------------------------------------------------

// const myShowFileNameInput = document.getElementById("myShowFileName"); //tu są inne id !!!
// const showFileBtn = document.getElementById("showPhotoBtn");
// const img = document.createElement("img");

// showFileBtn.addEventListener("click", () => {
//   const imageRef = ref(storage, myShowFileNameInput.value);

//   headerInfo.innerText = "";

  // getDownloadURL(imageRef).then(url => {
  //   img.src = url;
  //   img.style.width = "250px";
  //   document.body.appendChild(img);
  // })
//     .catch(ex => {
//       headerInfo.innerText = "FOTO NIE ISTNIEJE!!!";
//     });
// });

// ------------------------------------------------------------------------
const storageRef = ref(storage);

listAll(storageRef).then(res => {
 const myol = document.getElementById("photoList")
  for(let i = 0; i < res.items.length; i ++){

    const myli = document.createElement("li");
    const mybutton = document.createElement("button");

    mybutton.addEventListener('click', () => {
      console.log("hejka!")
    })

    myli.innerText = res.items[i].name; //res... dot nazwy zdjęcia
    mybutton.innerText = "Pokaż zdjęcie";

    myol.appendChild(myli);
    myol.appendChild(mybutton);
  };
});