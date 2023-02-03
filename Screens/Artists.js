import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Linking, TouchableOpacity, Image } from 'react-native';
import { fetchArtists } from '../config';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../src/styles/styleArtists';
import { SocialIcon, Icon } from 'react-native-elements';



const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [selectedArtistId, setSelectedArtistId] = useState(null);
  const navigation = useNavigation()

  useEffect(() => {
    const fetchData = async () => {
      const artists = await fetchArtists();
      setArtists(artists);
    };
    fetchData();
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
                  <TouchableOpacity key={redSocial.nombre} onPress={() => Linking.openURL(redSocial.url)} >
                    <SocialIcon type={redSocial.nombre.toLowerCase()} size={24} style={{backgroundColor: '#333333', borderRadius: 50}}/>  
                  </TouchableOpacity>
                ))}
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Concerts', { artistId: item.id })} style={styles.button}>
                <Icon name={"place"} type='material' size={40} color='#0099ff' />
                <Text style={styles.text}>Concerts</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )} />
        
        </>
  );
};

export default Artists;

