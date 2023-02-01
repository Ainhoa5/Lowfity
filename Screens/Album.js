import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { firestore } from '../config';

const Album = ({ navigation, route }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const id_artista = route.params.id_artista;
    const albumsRef = firestore.db.collection('Albumes');
    const unsubscribe = albumsRef
      .where('id_artista', '==', id_artista)
      .onSnapshot(snapshot => {
        const updatedAlbums = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
        setAlbums(updatedAlbums);
      });
    return () => {
      unsubscribe();
    };
  }, [route.params.id_artista]);

  return (
    <View>
      {albums.map(album => (
        <View key={album.id}>
          <Text>{album.nombre_album}</Text>
          <Text>{album.descripcion}</Text>
          <Text>{album.fecha_lanzamiento}</Text>
        </View>
      ))}
    </View>
  );
};

export default Album;

