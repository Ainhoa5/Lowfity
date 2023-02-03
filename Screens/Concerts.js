import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { fetchConcertByArtistId } from '../config';
import { useRoute } from '@react-navigation/native';

const ConcertInfo = () => {
  const [concerts, setConcerts] = useState([]);
  const route = useRoute();
  const { artistId } = route.params;

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
          <Text>Artist: {concert.nombre}</Text>
          <Text>Date: {concert.fecha}</Text>
          {concert.Lugar && (
            <>
              <Text>Location: {concert.Lugar[0].Nombre}</Text>
              <Text>Latitude: {concert.Lugar[1].Latitud}</Text>
              <Text>Longitude: {concert.Lugar[2].Altitud}</Text>
            </>
          )}
        </View>
      ))}
    </View>
  );
};

export default ConcertInfo;



