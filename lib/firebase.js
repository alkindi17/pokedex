import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnyTyWl6DCx8rSa1e_X8JWlh5EdGJULgY",
  authDomain: "pokedex-e8fdf.firebaseapp.com",
  projectId: "pokedex-e8fdf",
  storageBucket: "pokedex-e8fdf.appspot.com",
  messagingSenderId: "704956606017",
  appId: "1:704956606017:web:ee0c9f744eafde1b07c8c0",
  measurementId: "G-WDRL30G4XV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
