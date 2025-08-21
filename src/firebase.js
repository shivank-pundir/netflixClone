import { initializeApp } from "firebase/app";
import { 
  createUserWithEmailAndPassword,
  getAuth, 
  signInWithEmailAndPassword, 
  signOut
} from "firebase/auth";
import { setDoc, doc, getFirestore } from "firebase/firestore";

import { toast } from "react-toastify";




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
