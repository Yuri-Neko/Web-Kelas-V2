// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBfTh-92vx1Qp2JLBkxuf-fHNsLToEhsBU",
  authDomain: "mela-8669c.firebaseapp.com",
  projectId: "mela-8669c",
  storageBucket: "mela-8669c.appspot.com",
  messagingSenderId: "303474266588",
  appId: "1:303474266588:web:5268e6c829c02bb372ff19",
  measurementId: "G-BTTKJ3NRNW"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
