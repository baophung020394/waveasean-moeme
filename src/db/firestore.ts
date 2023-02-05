import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDBpR6pg77-D4N-blRnGkJNkPmSoyjTOts",
  authDomain: "electron-5afae.firebaseapp.com",
  databaseURL: "https://electron-5afae.firebaseio.com",
  projectId: "electron-5afae",
  storageBucket: "electron-5afae.appspot.com",
  messagingSenderId: "253692635376",
  appId: "1:253692635376:web:b7d716b038f946cd58fa35",
  measurementId: "G-21ZBP1YRNC",
};

export const { Timestamp } = firebase.firestore;
// Initialize Firebase
export default firebase.initializeApp(config).firestore();
