// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtT8yCgFftiyP_qze8D-vSypFcj7o3tzc",
  authDomain: "chat-2up.firebaseapp.com",
  projectId: "chat-2up",
  storageBucket: "chat-2up.appspot.com",
  messagingSenderId: "129308488781",
  appId: "1:129308488781:web:a3e646081ffb27b71d5804",
  measurementId: "G-Z8TPQ802WV"
}

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

export default db;