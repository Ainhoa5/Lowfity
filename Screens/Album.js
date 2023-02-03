import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { fetchAlbumsByArtistId } from '../config';
import { useRoute } from '@react-navigation/native';
import { styles } from '../src/styles/styleAlbums';

const Album = () => {
  const [albums, setAlbums] = useState([]);
  const route = useRoute();
  const { artistId } = route.params;
  useEffect(() => {
    const fetchData = async () => {
      const id_artista = artistId;
      const albumData = await fetchAlbumsByArtistId(id_artista);
      setAlbums(albumData);
    };
    fetchData();
  }, []);
  

  return (
    <><View style={styles.header}>
      <Text style={styles.headerTitle}>Albums.</Text>
    </View>

      <FlatList
        data={albums}
        keyExtractor={item => item.id_album}
        renderItem={({ item }) => (
          <View style={[styles.albumContainer]}>
            <Text style={styles.albumName}>{item.nombre}</Text>
            <Text style={styles.albumInfo}>{item.descripcion}</Text>
          </View>
        )} />
    </>
  );
};

export default Album;


