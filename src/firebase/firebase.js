import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCZ5nuH04xpLTCy7C6-odX_pDHSKe5UzDI",
    authDomain: "icfdatabase-5048c.firebaseapp.com",
    databaseURL: "https://icfdatabase-5048c.firebaseio.com",
    projectId: "icfdatabase-5048c",
    storageBucket: "icfdatabase-5048c.appspot.com",
    messagingSenderId: "7256575324",
    appId: "1:7256575324:web:994fbea9aa4b6d349b4599"
  };

 
const myFirebase = initializeApp(firebaseConfig)
export const auth = getAuth(myFirebase)