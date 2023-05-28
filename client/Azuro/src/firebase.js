
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut} from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDk6HOkWb0IP4weONwCPAmrP5LZpCZjcnA",
    authDomain: "doche-48b74.firebaseapp.com",
    projectId: "doche-48b74",
    storageBucket: "doche-48b74.appspot.com",
    messagingSenderId: "594357899522",
    appId: "1:594357899522:web:6f274f11d041faf6f8b21b",
    measurementId: "G-FXG3QVGQXY"
  };

 const app = initializeApp(firebaseConfig);


export const auth =getAuth(app)
export const db=getFirestore(app)

