import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import albumsJson from './json/albumes.json';

function Album({ route }) {
  const [album, setAlbum] = useState({});

  useEffect(() => {
    const artistId = route.params.artistId;
    const album = albumsJson.find((album) => album.id_artista === artistId);
    setAlbum(album);
  }, [route.params.artistId]);

  return (
    <View>
      {/* <Image source={require(`./img/${album.foto_album}`)} /> */}
      <Text>{album.nombre_album}</Text>
      <Text>{album.fecha_lanzamiento}</Text>
      <Text>{album.descripcion}</Text>
      <Text>{album.reproducciones}</Text>
      <Text>{album.valoracion}</Text>
      <FlatList
        data={album.canciones}
        keyExtractor={(item) => item.nombre}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nombre}</Text>
            <Text>{item.duracion}</Text>
            <Text>{item.reproducciones}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default Album;
