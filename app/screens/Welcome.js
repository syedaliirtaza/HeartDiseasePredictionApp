import React from 'react';
import { Image ,View, StyleSheet, Text, Pressable} from 'react-native';

function WelcomeScreen({navigation}) {
    return (
        <View style={styles.welcomeContainer}>
            <Image 
            style={styles.logo}
            source={require("../assets/HDPS.png")}
            fadeDuration={5000}
             />
             <Pressable style={styles.button} onPress={()=> navigation.navigate('Login')} >
                 <Text style={styles.buttonText}>Get Started</Text>
             </Pressable>
             <Pressable style={styles.creditsButton} onPress={()=> navigation.navigate('Credits')}>
                    <Text style={styles.creditsText}>Credits</Text>   
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    welcomeContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    logo: {
        height: 350,
        width: 350
    },
    button: {
        borderWidth: 0.2,
        borderColor: "gray",
        height: 30,
        width: "auto",
        borderRadius: 20
    },
    buttonText: {
        color: "#A13333",
        fontSize: 12,
        fontWeight: "bold",
        padding: 5
    },
    creditsButton: {
        position: "absolute",
        bottom: 30,
    },
    creditsText: {
        fontSize: 12,
        fontWeight: "bold"
    }
    
})

export default WelcomeScreen;