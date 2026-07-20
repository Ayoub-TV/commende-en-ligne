// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
import { getMessaging } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-messaging.js";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDWxL2_N3TKhVeXBoWzSvefrkQE6DaKqws",
  authDomain: "commende-en-ligne.firebaseapp.com",
  projectId: "commende-en-ligne",
  storageBucket: "commende-en-ligne.firebasestorage.app",
  messagingSenderId: "1070045982976",
  appId: "1:1070045982976:web:b059f49f1b22a5588ac3e5",
  measurementId: "G-18V0XFZL0S"
};

// Initialisation
const app = initializeApp(firebaseConfig);

export {
  db,
  collection,
  addDoc,
  messaging
};
export const db = getFirestore(app);
