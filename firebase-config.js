// Firebase configuration - Ecoexist PWA
const firebaseConfig = {
  apiKey: "AIzaSyCpkEUmXGcuyl9jPIP3RE4QboBThO4FlRc",
  authDomain: "ecoexist-app.firebaseapp.com",
  projectId: "ecoexist-app",
  storageBucket: "ecoexist-app.firebasestorage.app",
  messagingSenderId: "542441051199",
  appId: "1:542441051199:web:013e2144976fad6827148a",
  measurementId: "G-H66S20LYVS"
};

// Initialize Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import {
  getAuth,
  signInWithCustomToken,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  signOut,
  onAuthStateChanged,
  sendSignInLinkToEmail
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

console.log('Firebase config loaded - Ecoexist project: ecoexist-app');

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);  // Default Firestore database

console.log('Firebase initialized:', { app, auth, db });

// Export for use in other modules
window.firebaseAuth = {
  auth,
  db,
  signInWithCustomToken,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  signOut,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp
};

console.log('window.firebaseAuth set:', window.firebaseAuth);
