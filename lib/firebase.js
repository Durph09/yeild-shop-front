import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDCf47RI7EADoBTbmawC-4zNEe7yUrtFHY",
    authDomain: "yeildstore.firebaseapp.com",
    databaseURL: "https://yeildstore-default-rtdb.firebaseio.com",
    projectId: "yeildstore",
    storageBucket: "yeildstore.appspot.com",
    messagingSenderId: "978078967013",
    appId: "1:978078967013:web:f616a5e91e365aaad6200c",
    measurementId: "G-4FGFX2BZLE"
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export const storage = firebase.storage();