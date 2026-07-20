import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDaDQgSr24E2leWvTy3SqCiRWEeBbrG1p0",
  authDomain: "commende-en-ligne-9dc64.firebaseapp.com",
  projectId: "commende-en-ligne-9dc64",
  storageBucket: "commende-en-ligne-9dc64.firebasestorage.app",
  messagingSenderId: "158847520143",
  appId: "1:158847520143:web:f9a5145430d82b70794ffa"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);