import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCVAqnl7lG0Zel2NUeNwyh7RSjGxXeRq74",
    authDomain: "afnanxhassan.firebaseapp.com",
    projectId: "afnanxhassan",
    storageBucket: "afnanxhassan.firebasestorage.app",
    messagingSenderId: "973332095395",
    appId: "1:973332095395:web:6b220cac6e1b99e33b3a16",
    measurementId: "G-1L43G44XCJ"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db};
