import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import PredictionScreen from './app/screens/PredictionScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <View style={styles.background}>
      {/* <WelcomeScreen /> */}
      {/* <HomeScreen /> */}
      <PredictionScreen />
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
