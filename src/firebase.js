// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import "firebase/database";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmnNcYVG3gHF9MfKISo1cVxTX7AxRn07A",
  authDomain: "pickcel-assignment.firebaseapp.com",
  projectId: "pickcel-assignment",
  storageBucket: "pickcel-assignment.appspot.com",
  messagingSenderId: "386264317251",
  appId: "1:386264317251:web:ff92ce21ee422d7d2903f6"
};


firebase.initializeApp(firebaseConfig);


export default firebase.database();