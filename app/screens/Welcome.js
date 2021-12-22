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
             <Pressable style={styles.button} onPress={()=> navigation.navigate('Home')} >
                 <Text style={styles.buttonText}>Get Started</Text>
             </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    welcomeContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        height: 350,
        width: 350
    },
    button: {
        backgroundColor: "pink"
    },
    buttonText: {
        color: "black"
    }
    
})

export default WelcomeScreen;