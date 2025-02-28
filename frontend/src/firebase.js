import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "code213-final-project-d3b11.firebaseapp.com",
  projectId: "code213-final-project-d3b11",
  storageBucket: "code213-final-project-d3b11.appspot.com",
  messagingSenderId: "1083390498555",
  appId: "1:1083390498555:web:eaf8d148723f3821b0825e",
  measurementId: "G-WJSPSMQDPQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
