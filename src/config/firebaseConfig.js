import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  getAuth
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDk-EscqHOxhvvQfk1ob7RYlbVdKxib02U",
  authDomain: "pokedex-d311e.firebaseapp.com",
  projectId: "pokedex-d311e",
  storageBucket: "pokedex-d311e.appspot.com",
  messagingSenderId: "722171265575",
  appId: "1:722171265575:web:0a264e349420991b200402",
  measurementId: "G-GWFVMFG0C2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const  loginWithEmailAndPassword = async (email, password) =>{
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
    return err;
  }
};

export { auth, loginWithEmailAndPassword};