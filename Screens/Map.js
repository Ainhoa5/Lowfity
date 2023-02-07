import React,{useState} from "react";
import {StyleSheet, View} from "react-native";
import MapView from "react-native-maps";
import { useRoute } from '@react-navigation/native';


const MapInfo = ()=>{
    const [map, setMap] = useState([]);
    const route = useRoute();
    const {Latitud,Longuitude} = route.params;

    return (
        <View style= {styles.container}>
            <MapView 
                style = {styles.map}
                initialRegion={{
                    latitude: Latitud,
                    longitude : Longuitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04,
                }}
            />
        </View>
    );
    
}
export default MapInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width:'100%',
        height:'100%',
    }
});