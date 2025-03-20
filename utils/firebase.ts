// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoVLQ4I1a3mMFW7pjq8-jJqlvtnNmpRI4",
  authDomain: "catinpajamasplayground.firebaseapp.com",
  projectId: "catinpajamasplayground",
  storageBucket: "catinpajamasplayground.firebasestorage.app",
  messagingSenderId: "832218770868",
  appId: "1:832218770868:web:c688e184460fe6427416e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const provider = new GoogleAuthProvider()
//キャッシュに関わらず、毎回ログイン時ログインユーザーを問うようにする
provider.setCustomParameters({
  prompt: 'select_account'
})
const auth = getAuth(app)
export { db, provider, auth }