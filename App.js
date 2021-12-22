import React from 'react';
import { StyleSheet, } from 'react-native';
import Home from './app/screens/Home';
import Prediction from './app/screens/Prediction';
import Welcome from './app/screens/Welcome';
import Tips from "./app/screens/Tips";
import {enableScreens} from "react-native-screens";

enableScreens();

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
         <Stack.Navigator>
              <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen
                options={{headerLargeTitle: true}}
              name="Prediction" component={Prediction} />
              <Stack.Screen 
                options={{headerLargeTitle: true}}
                name="Tips" component={Tips}
              />
         </Stack.Navigator>
    </NavigationContainer>
  );
}


// const styles = StyleSheet.create({
//   background: {
//       backgroundColor: "white",
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center"
//   }
// })
