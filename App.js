import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.background}>
      {/* <WelcomeScreen /> */}
      <HomeScreen />
    </View>  
  );
}

const styles = StyleSheet.create({
  background: {
      backgroundColor: "#FAFCFC",
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
