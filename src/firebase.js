import { initializeApp } from "firebase/app";
import { 
  createUserWithEmailAndPassword,
  getAuth, 
  signInWithEmailAndPassword, 
  signOut
} from "firebase/auth";
import { setDoc, doc, getFirestore } from "firebase/firestore";

import { toast } from "react-toastify";



const firebaseConfig = {
  apiKey: "AIzaSyDyl7NfuaMyZyzlPSvlaWW3T8gkK8OB6iU",
  authDomain: "netflixclone-a039a.firebaseapp.com",
  projectId: "netflixclone-a039a",   
  storageBucket: "netflixclone-a039a.firebasestorage.app",
  messagingSenderId: "915634930509",
  appId: "1:915634930509:web:7379b779302b5795c5ad04"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    // Create user in Firebase Auth
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Save user details in Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name: name,
      email: email,
      authProvider: "local",
      createdAt: new Date()
    });

    console.log(" User signed up and saved:", user.uid);
  } catch (error) {
    console.error(" Sign up error:", error.message);
      toast.error(error.code.split('/')[1].split('-').join(" "));
    
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log(" User logged in");
  } catch (error) {
    console.error(" Login error:", error.message);
         toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const logout = () => {
  signOut(auth);
  console.log(" User logged out");
};

export { auth, db, signUp, login, logout };
