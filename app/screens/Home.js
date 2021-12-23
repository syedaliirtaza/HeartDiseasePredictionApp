import React, {useState} from 'react';
import { View, StyleSheet, Text, Pressable, TouchableOpacity} from 'react-native';
import {auth} from "../../firebase";

function Home({navigation}) {

    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.replace("Login")
            console.log("signed out")
          })
          .catch(error => alert(error.message))
      }

    return (
        <View style={styles.welcomeContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.headingTitle}>Click here to start</Text>
                <Text style={styles.headingDesc}>Prediction</Text>
                <Pressable style={styles.predictionButton} onPress={()=> navigation.navigate('Prediction')}>
                    <Text style={styles.text}>Check My Heart Health</Text>
                </Pressable>
                <Pressable style={styles.tipsButton} onPress={()=> navigation.navigate('Tips')}>
                    <Text style={styles.text}>Get Health Tips</Text>   
                </Pressable>
                <TouchableOpacity style={styles.signoutButton} onPress={handleSignOut}>
                    <Text style={styles.text} >Sign out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    welcomeContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flex: 1
    }, 
    textContainer: {
        display: "flex",
    },
    headingTitle: {
        fontSize: 20,
        fontFamily: "sans-serif-condensed",
        fontWeight: "normal",
        color: "black"
    },
    headingDesc: {
        fontSize: 50,
        fontFamily: "sans-serif-condensed",
        fontWeight: "bold",
        color: "#A44444",
        position: "relative",
        left: -15,
    },
    predictionButton: {
        backgroundColor: "#C87777",
        borderWidth: 0.5,
        borderColor: "gray",
        padding: 15,
        borderRadius: 20,
        marginTop: 20,
    },
    tipsButton: {
        backgroundColor: "#F7ECEC",
        borderWidth: 0.5,
        borderColor: "gray",
        padding: 15,
        borderRadius: 20,
        marginTop: 20
    },
    signoutButton: {
        backgroundColor: "transparent",
        borderWidth: 0.5,
        borderColor: "gray",
        padding: 15,
        borderRadius: 20,
        marginTop: 20
    },
    text: {
        color: "#A13333",
        textAlign: "center",
        fontWeight: "bold",
    }
})

export default Home;