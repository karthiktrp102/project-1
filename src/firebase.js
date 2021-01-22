import * as firebase from "firebase";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyCg7nu1A4H0JF7tKGpI4vQ5EvqDd3oI4Fs",
  authDomain: "firestore-86629.firebaseapp.com",
  databaseURL: "https://firestore-86629.firebaseapp.com", 
  projectId: "firestore-86629",
  storageBucket: "firestore-86629.appspot.com",
  messagingSenderId: "516856334417",
  appId: "1:516856334417:web:a1879ee635703041745070",
};

firebase.initializeApp(config);

export default firebase.firestore();
