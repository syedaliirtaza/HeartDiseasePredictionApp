import React from 'react';
import { View, StyleSheet, Text, Button, Pressable} from 'react-native';

function Credits(props ) {
    return (
       <View style={styles.outcomeContainer}>
            <Text style={styles.headingDesc}>Dedication</Text>
            <Text style={styles.text}>We would like to dedicate this project to all those people who fell victom to <Text style={styles.textBold}>Heart Disease</Text> and were unable to survive because of it. All those people who didn't have any sort of prior knowledge about their illness or a warning before</Text>
            <Text style={styles.headingDesc}>Acknowledgement</Text>
            <Text style={styles.text}>We truly acknowledge cooperation and help make by <Text style={styles.textBold}>Sir Sajid Ullah Khan. Assistant Professor, Department Of Computer Science, The University Of Lahore.</Text> He has been a constant source of guidance throughout the course of this project. We would also like to thank our parents and friends whose silent support led us to complete this project</Text>
            <Text style={styles.headingDesc}>Our Team</Text>
            <Text style={styles.text}><Text style={styles.textBold}>Syed Ali Irtaza</Text> for project lead,<Text style={styles.textBold}> Hamza Azeem & Basit Rehman</Text> for technical support</Text>
            <Text style={[styles.text, styles.headingDesc, styles.lastText]}>Alhamdulillah</Text>
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
        textAlign: "center",
        fontSize: 15,
        padding: 10
    },
    textBold: {
        fontWeight: "bold",
        fontSize: 14,
        marginHorizontal: 10,
        marginVertical: 10
    },
    headingDesc: {
        fontSize: 30,
        fontFamily: "sans-serif-condensed",
        fontWeight: "bold",
        color: "#A44444",
        position: "relative",
        left: -15,
    },
    lastText: {
        fontSize: 15,
        fontWeight: "bold"
    }
})

export default Credits;