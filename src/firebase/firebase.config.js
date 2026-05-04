// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIGCasA0tr6DARIzDXStilqDTrvq6M_yo",
    authDomain: "dragon-news-project-d607e.firebaseapp.com",
    projectId: "dragon-news-project-d607e",
    storageBucket: "dragon-news-project-d607e.firebasestorage.app",
    messagingSenderId: "741746904400",
    appId: "1:741746904400:web:4302b161a61a9140367055"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;