import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import albumsJson from './json/albumes.json';

function Album({ route }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const { artistId } = route.params;
    const filteredAlbums = albumData.filter((album) => album.id_artista === artistId);
    setAlbums(filteredAlbums);
  }, []);

  return (
    <FlatList
      data={albumsJson}
      keyExtractor={(item) => item.id_album.toString()}
      renderItem={({ item }) => (
        <View style={styles.albumContainer}>
          <Image style={styles.albumImage} source={{ uri: `${item.foto_album}` }} />
          <Text style={styles.albumName}>{item.nombre_album}</Text>
          <Text style={styles.albumInfo}>Release Date: {item.fecha_lanzamiento}</Text>
          <Text style={styles.albumInfo}>{item.descripcion}</Text>
        </View>
      )}
    />
  );
}
const styles = {
  albumContainer: {
    alignItems: 'center',
    margin: 10,
  },
  albumImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  albumName: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  albumInfo: {
    color: 'gray',
    marginTop: 5,
  },
};
export default Album;
