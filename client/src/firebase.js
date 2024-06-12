// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-b1d9e.firebaseapp.com",
  projectId: "real-estate-b1d9e",
  storageBucket: "real-estate-b1d9e.appspot.com",
  messagingSenderId: "166652829865",
  appId: "1:166652829865:web:0293d1425000d40c0fc9b8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


