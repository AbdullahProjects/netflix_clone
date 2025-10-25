import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyANqm01cwwkYWY0DNuY5aRR-uH-dLgrASk",
  authDomain: "netflix-clone-c7eab.firebaseapp.com",
  projectId: "netflix-clone-c7eab",
  storageBucket: "netflix-clone-c7eab.firebasestorage.app",
  messagingSenderId: "6532787929",
  appId: "1:6532787929:web:00a3653f26db01ea5098c8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const signupUser = async (name, email, password) => {
  try{
    // --- Validation ---
    if (!name.trim()) {
      toast.error("Please enter your name.");
      return;
    }
    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!password.trim()) {
      toast.error("Please enter a password.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  }
  catch(e){
    console.log(`Error while signup user: ${e}`);
    toast.error(e.message || 'An error occurred during signup');
  }
}

const loginUser = async (email, password) => {
  try{
    // --- Validation ---
    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!password.trim()) {
      toast.error("Please enter your password.");
      return;
    }

    await signInWithEmailAndPassword(auth, email, password);
  }
  catch(e){
    console.log(`Error while login user: ${e}`);
    toast.error(e.message || 'An error occurred during login');
  }
}

const logoutUser = async () => {
  await signOut(auth);
}

export {auth, db, loginUser, signupUser, logoutUser};
