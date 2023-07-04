// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbVsOnlP19dslHPGy-t6oATSPBgE-Zz1M",
  authDomain: "video-fd030.firebaseapp.com",
  projectId: "video-fd030",
  storageBucket: "video-fd030.appspot.com",
  messagingSenderId: "539066554087",
  appId: "1:539066554087:web:e5fce063462e7e6fd8b442"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider();

export default app;