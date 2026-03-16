import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc  } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyBCK-rZSOLiLHPTVG5W3m_uJD5TDcO224c",
  authDomain: "bitmatics-mod7ex.firebaseapp.com",
  projectId: "bitmatics-mod7ex",
  storageBucket: "bitmatics-mod7ex.firebasestorage.app",
  messagingSenderId: "1030075028745",
  appId: "1:1030075028745:web:b52f7772df48e57402efd8",
  measurementId: "G-HQMWPWZSPS"
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export const handleGoogleLogin = async () => {
    await signInWithPopup(auth, googleProvider);
};

export const handleSignOut = async () => {
  await signOut(auth);
};

interface Data {
  name: string;
  phone: string;
  level: string;
  message: string;
}

export const saveUserData = async (data: Data) => {
    const docRef = await addDoc(collection(db, "Users"), {
      name: data.name,
      phone: data.phone,
      email: auth.currentUser.email,
      level: data.level,
      message: data.message,
      timestamp: new Date()
    });
    console.log("Document written with ID:", docRef.id);
};

