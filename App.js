import React from 'react';
import { StyleSheet, } from 'react-native';
import Home from './app/screens/Home';
import Prediction from './app/screens/Prediction';
import Welcome from './app/screens/Welcome';
import Credits from './app/screens/Credits';
import Tips from "./app/screens/Tips";
import Login from "./app/screens/Login";
import {enableScreens} from "react-native-screens";
import { Provider } from "react-redux";
import { Store } from "./app/redux/store"

enableScreens();

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Outcome from './app/screens/Outcome';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={Store}>
        <NavigationContainer>
            <Stack.Navigator>
                  <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
                  <Stack.Screen 
                    options={{headerLargeTitle: true}}
                    name="Credits" component={Credits}
                  />
                  <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                  <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                  <Stack.Screen
                    options={{headerLargeTitle: true}}
                  name="Prediction" component={Prediction} />
                  <Stack.Screen 
                    options={{headerLargeTitle: true}}
                    name="Tips" component={Tips}
                  />
                  <Stack.Screen 
                    options={{headerLargeTitle: true}}
                    name="Outcome" component={Outcome}
                  />
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}
