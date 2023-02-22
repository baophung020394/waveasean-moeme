// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBORxYGcGfL8wWyZAK7x1zhve5vjL8jgDM",
  authDomain: "moeme-chat-3.firebaseapp.com",
  projectId: "moeme-chat-3",
  storageBucket: "moeme-chat-3.appspot.com",
  messagingSenderId: "625080630868",
  appId: "1:625080630868:web:e4c7dc2c2b049477e077c1",
  measurementId: "G-GEMLJE9GBV",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
