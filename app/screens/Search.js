import * as React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { ActivityIndicator, StyleSheet, Text, Image, View, Dimensions } from 'react-native';

export default function Search() {
  return (
    <View style={styles.Container}>
    <View style={styles.mapContainer}>
      <MapView style={styles.map} 
        initialRegion={{
        latitude: 31.3914,
        longitude: 74.2412,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    }}>
        <Marker coordinate={{
            latitude: 31.3943,
            longitude: 74.2417,
        }}
        >
        <Image style={styles.icon} source={require("../assets/amb1.png")} />
        </Marker>
        <Marker coordinate={{
            latitude: 31.3901,
            longitude: 74.2403,
        }}
        >
        <Image style={styles.icon} source={require("../assets/amb1.png")} />
        </Marker>
        <Marker coordinate={{
            latitude: 31.3925,
            longitude: 74.2429,
        }}
        >
        <Image style={styles.icon} source={require("../assets/amb1.png")} />
        </Marker>
    </MapView>
    </View>
    <View style={styles.searchContainer}>
        <Text style={styles.text}>Seaching for Nearby Ambulances...</Text>
        <ActivityIndicator size="large" color="#A44444" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
  mapContainer: {
    flex: 0.75,
  },
  searchContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 430,
    height: 250,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  icon: {
      width: 35,
      height: 25,
  },
  text: {
      fontWeight: "bold",
      marginBottom: 5,
      color: "#C87777"
  }
});