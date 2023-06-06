import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBeE3aiYJQWxEaIo-NxDxabDjQwsrkdKFc",
  authDomain: "photo-awesome-b8515.firebaseapp.com",
  projectId: "photo-awesome-b8515",
  storageBucket: "photo-awesome-b8515.appspot.com",
  messagingSenderId: "514946294026",
  appId: "1:514946294026:web:46386bbcf60b91a9309af3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;