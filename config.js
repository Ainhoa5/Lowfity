import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBgl3A2BqCeYLFsCQC_j945QW-clKiTab4",
  authDomain: "lowfit-19202.firebaseapp.com",
  projectId: "lowfit-19202",
  storageBucket: "lowfit-19202.appspot.com",
  messagingSenderId: "320894648458",
  appId: "1:320894648458:web:6db1b541200c42c83ead73",
  measurementId: "G-1EE0G0SPVJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};