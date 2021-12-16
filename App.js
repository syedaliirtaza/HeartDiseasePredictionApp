import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.background}>
      <WelcomeScreen />
    </View>  
  );
}

const styles = StyleSheet.create({
  background: {
      backgroundColor: "#E8C5C5",
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  }
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'lightblue',
//     // paddingTop: Platform.OS === 'android' ? 50 : 0
//     justifyContent: "center",
//     alignItems: "center"
//   },
// });
