import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

var firebaseConfig = {
  // API credentials
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
