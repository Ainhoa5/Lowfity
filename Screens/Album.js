import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import firebaseConfig from '../config';
import { useNavigation, useRoute } from '@react-navigation/native';

const Album = () => {
  const [albums, setAlbums] = useState([]);
  const route = useRoute();
  const { artistId } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      const id_artista = artistId;
      const albumData = await firebaseConfig.fetchAlbumsByArtistId(id_artista);
      setAlbums(albumData);
    };
    fetchData();
  }, []);

  return (
    <FlatList
      data={albums}
      keyExtractor={item => item.id_album.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.nombre}</Text>
          <Text>{item.descripcion}</Text>
          <Text>{item.fecha_lanzamiento}</Text>
        </View>
      )}
    />
  );
};

export default Album;


