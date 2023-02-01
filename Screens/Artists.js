import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import firebaseConfig from '../config';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Artist = () => {
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
    <FlatList
      data={artists}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Albums', { artistId: item.id })}>
          <View style={[styles.artistContainer, selectedArtistId === item.id && styles.selectedArtistContainer]}>        
          <Text style={styles.artistName}>{item.nombre}</Text>
          <Text style={styles.artistInfo}>{item.edad}</Text>
          <Text style={styles.artistInfo}>Followers: {item.seguidores}</Text>
          
          <View style={styles.buttonContainer}>
            {item.redes_sociales && item.redes_sociales.map(redSocial => (
              <TouchableOpacity key={redSocial.nombre} onPress={() => Linking.openURL(redSocial.url)} style={styles.button}>
                      <Text>{redSocial.nombre}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default Artist;

const styles = {
  text: {
    color: 'white'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C70039',
    padding: 10
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E1D1D1',
    borderRadius: 10,
    justifyContent: 'space-between',
    padding: 20
  },
  button: {
    padding:20,
    width: 110,
    alignItems: 'center',
    height: 60,
    marginVertical:5,
    marginHorizontal:10,
    borderRadius: 10,
    backgroundColor: '#765763'
  },
  artistContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    padding: 40,

  },
  selectedArtistContainer: {
      backgroundColor: '#765763'
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 75
  },
  artistName: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10
  },
  artistInfo: {
    fontSize: 20,
    marginVertical: 5
  },
  title: {
    fontSize: 80,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 50
  }
  };

