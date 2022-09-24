import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBGdA0a2MJYpvFMBwnmtbUK-JYz44LvBI0",
    authDomain: "easzybuy-f44ee.firebaseapp.com",
    projectId: "easzybuy-f44ee",
    storageBucket: "easzybuy-f44ee.appspot.com",
    messagingSenderId: "518436925650",
    appId: "1:518436925650:web:2604f29b5b558c3c2bfd0b",
    measurementId: "G-RWZJMR6FEZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  const auth = firebase.auth();
  
  export { db, auth }