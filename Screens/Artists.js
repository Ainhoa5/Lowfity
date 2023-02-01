import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Linking, TouchableOpacity } from 'react-native';
import firebaseConfig from '../config';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../src/styles/styleArtists';

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [selectedArtistId, setSelectedArtistId] = useState(null);
  const navigation = useNavigation()

  useEffect(() => {
    firebaseConfig.db.collection('Artistas').get()
      .then(querySnapshot => {
        let artists = [];
        querySnapshot.forEach(doc => {
          artists.push({ id: doc.id, ...doc.data() });
        });
        setArtists(artists);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <><View style={styles.header}>
      <Text style={styles.headerTitle}>Artists.</Text>
    </View>
    
    <FlatList
        data={artists}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Albums', { artistId: item.id })}>
            <View style={[styles.artistContainer, selectedArtistId === item.id && styles.selectedArtistContainer]}>
              <Text style={styles.artistName}>{item.nombre}</Text>
              <Text style={styles.artistInfo}>Born on: {item.edad}</Text>
              <Text style={styles.artistInfo}>Followers: {item.seguidores}</Text>

              <View style={styles.buttonContainer}>
                {item.redes_sociales && item.redes_sociales.map(redSocial => (
                  <TouchableOpacity key={redSocial.nombre} onPress={() => Linking.openURL(redSocial.url)} style={styles.button}>
                    <Text style={styles.text}>{redSocial.nombre}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </TouchableOpacity>
        )} /></>
  );
};

export default Artists;

