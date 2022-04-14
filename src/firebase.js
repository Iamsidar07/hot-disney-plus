import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNOEUFVocv5CnPOumBP4qIichkr5u28ZE",
  authDomain: "sasta-disney-plus.firebaseapp.com",
  databaseURL: "https://sasta-disney-plus-default-rtdb.firebaseio.com",
  projectId: "sasta-disney-plus",
  storageBucket: "sasta-disney-plus.appspot.com",
  messagingSenderId: "483150481069",
  appId: "1:483150481069:web:e024b856fd18eb5742a824",
  measurementId: "G-KPVHPRVK5R"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);
  
export { auth, provider, storage };
export default db;
