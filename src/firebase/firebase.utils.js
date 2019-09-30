// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/firestore";

// Add the Firebase products that you want to use
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfS81nD0ugLLyZzong2QWL13wv4hUy0co",
    authDomain: "klaxoon-test-37002.firebaseapp.com",
    databaseURL: "https://klaxoon-test-37002.firebaseio.com",
    projectId: "klaxoon-test-37002",
    storageBucket: "",
    messagingSenderId: "375119217645",
    appId: "1:375119217645:web:7c397c50b1b542e5c25de4",
    measurementId: "G-KQ1Q8KL43S"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
export const firestore = firebase.firestore();
