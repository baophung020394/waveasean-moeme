import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyBORxYGcGfL8wWyZAK7x1zhve5vjL8jgDM",
  authDomain: "moeme-chat-3.firebaseapp.com",
  projectId: "moeme-chat-3",
  storageBucket: "moeme-chat-3.appspot.com",
  messagingSenderId: "625080630868",
  appId: "1:625080630868:web:e4c7dc2c2b049477e077c1",
  measurementId: "G-GEMLJE9GBV",
};

// export const database = firebase;
export const { Timestamp } = firebase.firestore;
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export default firebase.initializeApp(firebaseConfig);

// const messaging = getMessaging();
// export const getToken = async (setTokenFound: any) => {
//   let currentToken = "";
//   try {
//     currentToken = await getToken({
//       vapidKey:
//         "BHQ0O7j9_SRP-uAwDv6p1_B0o-Thwt5SMhMD74sAbbVsfYmeCFZNzfhV6GikSsXhDacUz7arpskzaAqNRteoyJM",
//     });
//     if (currentToken) {
//       console.log({currentToken})
//       setTokenFound(true);
//     } else {
//       setTokenFound(false);
//     }
//   } catch (error) {
//     console.log("An error occurred while retrieving token.", error);
//   }
//   return currentToken;
// };

// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     onMessage(messaging, (payload) => {
//       console.log("payload", payload);
//       resolve(payload);
//     });
//   });

// export const requestForToken = () => {
//   return getToken(messaging, {
//     vapidKey:
//       "BHQ0O7j9_SRP-uAwDv6p1_B0o-Thwt5SMhMD74sAbbVsfYmeCFZNzfhV6GikSsXhDacUz7arpskzaAqNRteoyJM",
//   })
//     .then((currentToken) => {
//       if (currentToken) {
//         console.log("current token for client: ", currentToken);
//         // Perform any other neccessary action with the token
//       } else {
//         // Show permission request UI
//         console.log(
//           "No registration token available. Request permission to generate one."
//         );
//       }
//     })
//     .catch((err) => {
//       console.log("An error occurred while retrieving token. ", err);
//     });
// };
