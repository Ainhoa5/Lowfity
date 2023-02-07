import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

var firebaseConfig = {
  // API credentials
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to fetch albums with specific id_artista
export const fetchAlbumsByArtistId = async (id_artista) => {
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

// Function to fetch concerts with specific id_artista
export const fetchConcertByArtistId = async (id_artista) => {
  try {
    const concerts = await db.collection('Conciertos')
      .where('idartista', '==', id_artista)
      .get();
    return concerts.docs.map(concert => concert.data());
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchArtists = () => {
  return db.collection('Artistas').get()
    .then(querySnapshot => {
      let artists = [];
      querySnapshot.forEach(doc => {
        artists.push({ id: doc.id, ...doc.data() });
      });
      return artists;
    })
    .catch(error => {
      console.error(error);
      return [];
    });
};
