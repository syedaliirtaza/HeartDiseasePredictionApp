import React from 'react';
import { Image ,View, StyleSheet, Text} from 'react-native';

function WelcomeScreen(props) {
    return (
        <View style={styles.welcomeContainer}>
            {/* <Text style={styles.heading}>HDPS</Text> */}
            <Image 
            style={styles.logo}
            source={require("../assets/applogo.png")}
            fadeDuration={1000}
             />
        </View>
    );
}

const styles = StyleSheet.create({
    welcomeContainer: {
        justifyContent: "center"
    },
    logo: {
        height: 350,
        width: 350
    }
    // heading: {
    //     fontSize: 50,
    //     fontFamily: "sans-serif-condensed",
    //     fontWeight: "bold",
    //     color: "#A44444"
    // }
})

export default WelcomeScreen;