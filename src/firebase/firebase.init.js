import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

// Initialize Firebase
const initializeFirebaseApp = () => {
  initializeApp(firebaseConfig);
};

export default initializeFirebaseApp;
