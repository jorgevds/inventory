import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBYAr61oMF8r5KEQka3sPPPDIaDBop2g70",
  authDomain: "inventory-959f4.firebaseapp.com",
  databaseURL: "https://inventory-959f4.firebaseio.com",
  projectId: "inventory-959f4",
  storageBucket: "inventory-959f4.appspot.com",
  messagingSenderId: "688725914808",
  appId: "1:688725914808:web:f00c6bc946e6203f04b04d",
  measurementId: "G-8K4E0PJK2Z",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const fire = firebase;

export default fire;
