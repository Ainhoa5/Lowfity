import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity,StyleSheet } from 'react-native';
import { fetchConcertByArtistId } from '../config';
import { useRoute, useNavigation } from '@react-navigation/native';

const ConcertInfo = () => {
  const [concerts, setConcerts] = useState([]);
  const route = useRoute();
  const { artistId } = route.params;
  const navigation = useNavigation()
  useEffect(() => {
    const fetchData = async () => {
      const id_artista = artistId;
      const concertData = await fetchConcertByArtistId(id_artista);
      setConcerts(concertData);
    };
    fetchData();
  }, []);
  
  return (
    <View>
    
      
      {concerts.map(concert => (
      
        <View key={concert.idconcierto}>
          <Text style={styles.header}>Concerts.</Text>
          <Text style={styles.artistName} >{concert.nombre}</Text>
          <Text style={styles.text}>Date concert: {concert.fecha}</Text>
          {concert.Lugar && (
            <>
              <Text style={styles.text}>Location: {concert.Lugar[0].Nombre}</Text>
            </>
          )}
          <TouchableOpacity onPress={() => navigation.navigate('Map', {  Latitud: parseFloat(concert.Lugar[1].Latitud), Longuitude: parseFloat(concert.Lugar[2].Altitud)})}style={styles.boton}>
          <Image source={require('../src/img/location.png')} style={styles.icon}/>
            <Text style={styles.subtext}>Mapa</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    color: '#fff',
    fontSize: 40,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 20,
    paddingTop: 50,
  },
  text: {
    fontSize: 20,
    marginVertical: 5,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },
  icon: {
    height: 200, 
    width: 200,
    Align: 'center',
  },
  boton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:5,
    textColor: 'white',
    marginHorizontal:10,
    borderRadius: 10,
    textAlign: 'center',
  },
  artistName: {
    marginTop: 20,
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10
  },
})


export default ConcertInfo;



