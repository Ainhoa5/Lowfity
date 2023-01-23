import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Button } from 'react-native';

import artistasJson from './json/artistas.json';

function Artists() {
  const [artists, setArtists] = useState([]);
  const [selectedArtistId, setSelectedArtistId] = useState(null);

  useEffect(() => {
    setArtists(artistasJson);
  }, []);

  function handlePress(artistId) {
    // navigate to the album screen and pass the artistId as a prop
    setSelectedArtistId(artistId);
    
  }

  return (
    <><View>
      <Text style={styles.title}>Artists.</Text>
    </View>
    
    <FlatList
        data={artists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (

          <TouchableOpacity onPress={() => handlePress(item.id)}>
            <View style={[styles.artistContainer, selectedArtistId === item.id && styles.selectedArtistContainer]}>

              {/* image not showing */}
              {/* <Image style={styles.image} source={{ uri: `${item.foto}` }}/>  */}
              <Text style={styles.artistName}>{item.nombre}</Text>
              <Text style={styles.artistInfo}>Birthday: {item.edad}</Text>
              <Text style={styles.artistInfo}>Followers: {item.seguidores}</Text>
              <Text>{item.foto}</Text>
              <View style={styles.buttonContainer}>

              {item.redes_sociales.map((link, index) => (
                <TouchableOpacity key={index} onPress={() => Linking.openURL(link)} style={styles.button} >
                  <Text style={styles.text}>{link}</Text>
                </TouchableOpacity>
              ))}
                {/* <TouchableOpacity style={[styles.button]} onPress={() => {socialMediaLinks.map(link => Linking.openURL(link));}}>
                  <Text style={styles.text}>Instagram</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={() => {Linking.openURL(socialMediaLinks[1])}}>
                 <Text style={styles.text}>Spotify</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} onPress={() => {Linking.openURL(socialMediaLinks[2])}}>
                  <Text style={styles.text}>Youtube</Text>
                </TouchableOpacity> */}
                
              </View>
            </View>
          </TouchableOpacity>
        )} /></>
  );
}
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
export default Artists;
