import './../styles/styles.css';

console.log('Siemka z Webpack');

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {addDoc, collection, doc, getDoc, getFirestore, setDoc, updateDoc} from "firebase/firestore"
import { deleteObject, getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";

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
// const storageRef = ref(storage);

// listAll(storageRef).then(res => {
//  const myol = document.getElementById("photoList")
//   for(let i = 0; i < res.items.length; i ++){

//     const myli = document.createElement("li");
//     const mybutton = document.createElement("button");
//     const myUsun = document.createElement("button");

//     mybutton.addEventListener('click', () => {
//       const imageRef = ref(storage, res.items[i].name);
//       getDownloadURL(imageRef).then(url => {
//         let MyPhoto = document.getElementById("imgPhoto");
//         MyPhoto.src = url;
//         MyPhoto.style.width = "250px";
//         console.log(MyPhoto);
//       });
//     });

//     myUsun.addEventListener("click", () => {
//       const imageRef = ref(storage, res.items[i].name);
//       deleteObject(imageRef).then(url => {
//         console.log("paa");
//       });
//     });

//     myli.innerText = res.items[i].name; //res... dot nazwy zdjęcia
//     mybutton.innerText = "Pokaż zdjęcie";
//     myUsun.innerText = "usuń";

//     myol.appendChild(myli);
//     myol.appendChild(mybutton);
//     myol.appendChild(myUsun);
//   };
// });


// --------------------------------------------------------------------------------------
// zadanie 8

// wyswietalnie forlderow
// listAll(storageRef).then(res => {
//   res.prefixes.forEach(pref => {
//     console.log(pref.name);  
//   })
// });

// const albumsList = document.getElementById("albumsList");
// const uploadPhotoBtn = document.getElementById("uploadPhoto");
// const fileInput = document.getElementById("fileInput");
// const showPhotosBtn = document.getElementById("showPhotos");

// // wyświetlanie obrazka, który jest firebase
// showPhotosBtn.addEventListener("click", () => {
//   const albumRef = ref(storage, albumsList.value);
//   listAll(albumRef).then(res => {
//     res.items.forEach(item => {
//       const itemRef = ref(storage, item.fullPath);
//       getDownloadURL(itemRef).then(url => {
//         const img = document.createElement("img");
//         img.src = url;
//         img.style.width = "200px";
//         document.body.appendChild(img);
//       });
//     });
//   });
// });

// uploadPhotoBtn.addEventListener("click", () => {
//   if(albumsList.value){
//   // console.log(albumsList.value);//wyswietlanie naszego selecta
//   const file = fileInput.files[0];
//   const imageRef = ref(storage, `${albumsList.value}/${file.name}`);
//   uploadBytes(imageRef, file).then(() => console.log("sukces!"));
//   };
// });

// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//   res.prefixes.forEach(pref => {
//     // console.log(pref.name); 
//     const albumOption = document.createElement("option");
//     albumOption.innerText = pref.name;
//     albumsList.appendChild(albumOption);
//   })
// });

// zadanie 8 ---------- skopiowane ----------------------------
// const albumsList = document.getElementById("albumsList");
// const uploadPhotoBtn = document.getElementById("uploadPhoto");
// const fileInput = document.getElementById("fileInput");
// const showPhotosBtn = document.getElementById("showPhotos");

// uploadPhotoBtn.addEventListener("click", () => {
//   if (albumsList.value) {
//     const file = fileInput.files[0];
//     const imageRef = ref(storage, `${albumsList.value}/${file.name}`);
//     uploadBytes(imageRef, file).then(() => console.log("SUKCES"));
//   }
// });

// showPhotosBtn.addEventListener("click", () => {
//   const albumRef = ref(storage, albumsList.value);
//   listAll(albumRef).then(res => {
//     res.items.forEach(item => {
//       const itemRef = ref(storage, item.fullPath);

//       getDownloadURL(itemRef).then(url => {
//         const img = document.createElement("img");
//         img.src = url;
//         img.style.width = "200px";
//         document.body.appendChild(img);
//       })
//     })
//   })
// })

// // document.body.appendChild(img);

// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//   res.prefixes.forEach(pref => {
//     const albumOption = document.createElement("option");
//     albumOption.innerText = pref.name;
//     albumsList.appendChild(albumOption);
//   })
// })

//  ------------------------------BAZY-DANYCH-------------------------------------------------

// dodawanie dokumentu do bazy danych
// const jkDoc = doc(db, "users", "JanKowalskiId"); //baza danych, kolekcja, id
// setDoc(jkDoc, {
//   name: "Jan",
//   surname: "Kowalaski"
// });



// const nameInput = document.getElementById("name");
// const surnameInput = document.getElementById("surname");
// const ageInput = document.getElementById("age");
// const addUserBtn = document.getElementById("addUser");


// addUserBtn.addEventListener("click", () => {
//   const jkDoc = doc(db, "users", `${nameInput.value}${surnameInput.value}${ageInput.value}`);
//   setDoc(jkDoc, {
//     name: nameInput.value,
//     surname: surnameInput.value,
//     age: ageInput.value
//   }).then(() => console.log("sukces"));
// })

// // wyswietlanie dokumentów, które znadują się w bazie danych
// const kajaDoc = doc(db, "user", "JanKowalski");
// getDoc(kajaDoc).then(resDoc => {
//   const kaja = resDoc.data();
//   nameInput.value = kaja.name;
//   surnameInput.value = kaja.surname;
//   ageInput.value = kaja.age;
// })

const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const ageInput = document.getElementById("age");
const addUserBtn = document.getElementById("addUser");
const userCol = collection(db, "user");
const editUserBtn = document.getElementById("editUser");
const userIdHeader = document.getElementById("userId");

// dodawanie dokumentu z randomowym ID
addUserBtn.addEventListener("click", () => {
  addDoc(userCol, {
    name: nameInput.value,
    surname: surnameInput.value,
    age: ageInput.value
  })
})


getDoc(userCol).then(docs => {
  docs.forEach((myDoc => { //iteracja
    const editBtn = document.createElement("button");
    const myLi = document.createElement("li");

    const myUser = myDoc.data();

    myLi.innerText = `${myUser.name} ${myUser.surname} ${myUser.age}`;
    editBtn.innerText = "Edit"

    myLi.appendChild(editBtn);
    usersList.appendChild(myLi);

    editBtn.addEventListener("click", () => {
      nameInput.value = myUser.name;
      surnameInput.value = myUser.surname;
      ageInput.value = myUser.age;
      addUserBtn.style.display ="none"
      userIdHeader.innerText = myDoc.id;
    })
  }))
})

editUserBtn.addEventListener("click",() => {
  const userDoc = doc(db, "users", userIdHeader.innerText);
  updateDoc(userDoc, {
    name: nameInput.value,
    surname: surnameInput.value,
    age: ageInput.value
  });
  userIdHeader.innerText= "";
  nameInput.value = "";
  surnameInput.value = "";
  ageInput.value = "";
  addUserBtn.style.display = "inline-block";
  editUserBtn.style.display = "none";
});
