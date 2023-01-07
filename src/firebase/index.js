import "firebase/auth";
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEKtOP6qHXEFct04xNW3XHQ0QYM-ZJpwI",
  authDomain: "pourapp-c2b3e.firebaseapp.com",
  databaseURL: "https://pourapp-c2b3e-default-rtdb.firebaseio.com",
  projectId: "pourapp-c2b3e",
  storageBucket: "pourapp-c2b3e.appspot.com",
  messagingSenderId: "1068020856911",
  appId: "1:1068020856911:web:272c194b195fefee1d123a",
  measurementId: "G-6JW8T4S69Y",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export { firebase };
