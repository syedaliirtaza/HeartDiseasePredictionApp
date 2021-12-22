import React from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList} from 'react-native';

function Tips(props) {

    const healthTips = [
    {
        heading: "Drink Water",
        description: "Drink water after every 2 hours to stay hydrated"
    },
    {
        heading: "Run A Mile",
        description: "Running can make your immune system even better"
    },
    {
        heading: "Eat Healthy",
        description: "Eating healthy makes you live longer"
    },
    {
        heading: "Apple A Day",
        description: "One apple a day keeps the doctor away"
    },
    {
        heading: "Yoga Meditation",
        description: "Do yoga atleast once a week to rebuild your energy"
    },

]    

    return (
        <View style={styles.tipsContainer}>
                <View style={styles.tipsBox}>
                    <Text style={styles.tipsHeading}>{healthTips[0].heading}</Text>
                    <Text style={styles.tipsDescription}>{healthTips[0].description}</Text>
                </View>
                <View style={styles.tipsBox}>
                    <Text style={styles.tipsHeading}>{healthTips[1].heading}</Text>
                    <Text style={styles.tipsDescription}>{healthTips[1].description}</Text>
                </View>
                <View style={styles.tipsBox}>
                    <Text style={styles.tipsHeading}>{healthTips[2].heading}</Text>
                    <Text style={styles.tipsDescription}>{healthTips[2].description}</Text>
                </View>
                <View style={styles.tipsBox}>
                    <Text style={styles.tipsHeading}>{healthTips[3].heading}</Text>
                    <Text style={styles.tipsDescription}>{healthTips[3].description}</Text>
                </View>
                <View style={styles.tipsBox}>
                    <Text style={styles.tipsHeading}>{healthTips[4].heading}</Text>
                    <Text style={styles.tipsDescription}>{healthTips[4].description}</Text>
                </View>
        </View> 
    );
}

const styles = StyleSheet.create({
    tipsContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    tipsBox: {
        backgroundColor: "#FDF6F0",
        borderWidth: 0.5,
        borderColor: "#D59B9C",
        height: "auto",
        width: 350,
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
        marginTop: 15
    },
    tipsHeading: {
        color: "#461111",
        fontSize: 20,
        fontWeight: "bold"
    },
    tipsDescription: {
        fontSize: 15,
        marginTop: 5,
        marginBottom: 5
    }
});

export default Tips;