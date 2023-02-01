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

// Function to fetch albums with specific id_artista
const fetchAlbumsByArtistId = async (id_artista) => {
  try {
    const albums = await db.collection('Albumes')
      .where('id_artista', '==', id_artista)
      .get();
    return albums.docs.map(album => album.data());
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default {
  firebase,
  db,
  fetchAlbumsByArtistId
};