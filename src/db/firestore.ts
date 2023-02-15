import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBORxYGcGfL8wWyZAK7x1zhve5vjL8jgDM",
  authDomain: "moeme-chat-3.firebaseapp.com",
  projectId: "moeme-chat-3",
  storageBucket: "moeme-chat-3.appspot.com",
  messagingSenderId: "625080630868",
  appId: "1:625080630868:web:e4c7dc2c2b049477e077c1",
  measurementId: "G-GEMLJE9GBV"
};
// export const database = firebase;
export const { Timestamp } = firebase.firestore;
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
