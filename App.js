import React,{ useState }from 'react';
import {Text, Button, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';



export default function App() {
  const [mapRegion, setmapRegion] = useState({
    latitude: 43.7949631,
    longitude: -79.3596231,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
    <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}>

         <Marker coordinate={mapRegion} title='My City' />

      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  defaultText:{
  fontSize: 20, 
  fontFamily:'Times New Roman'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});
