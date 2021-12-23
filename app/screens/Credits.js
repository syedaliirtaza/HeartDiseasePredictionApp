import React from 'react';
import { View, StyleSheet, Text, Button, Pressable} from 'react-native';

function Credits(props ) {
    return (
       <View style={styles.outcomeContainer}>
            <Text style={styles.text}>Hey, my name is Syed Ali Irtaza and this app is made with Love by my and my team. let me introduce you to my team member without their help this project couldn't be possible.</Text>
            <Text style={styles.text}>Basit Rehman & Hamza Azeem both play very important role in making this application</Text>
            <Text style={[styles.text, styles.textBold]}>Alhamdulillah</Text>
       </View>
    );
}

const styles = StyleSheet.create({
    outcomeContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    text: {
        textAlign: "center"
    },
    textBold: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 10
    }
})

export default Credits;