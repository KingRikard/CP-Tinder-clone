import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBUUhCPo0RgTIw6VmeXhlBbHEFhWMFmDDY",
    authDomain: "tinder-clone-6958e.firebaseapp.com",
    projectId: "tinder-clone-6958e",
    storageBucket: "tinder-clone-6958e.appspot.com",
    messagingSenderId: "275013360699",
    appId: "1:275013360699:web:b11ddeca509108e47f101e",
    measurementId: "G-MYRBGJ5YJX",
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;