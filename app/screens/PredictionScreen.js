import React, { useState } from 'react';
import { TextInput ,View, StyleSheet, Text, ScrollView} from 'react-native';

function PredictionScreen(props) {

    const [age, setAge] = useState('');
    const [ sex, setSex ] = useState('');

    return (
        <View style={styles.welcomeContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.headingTitle}>Please enter your</Text>
                <Text style={styles.headingDesc}>Patient's Symptoms</Text>
            </View>
           
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>Please Enter your Age</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={age => setAge(text)}
                        defaultValue={age}
                    />
                    <Text style={styles.inputTitle}>Please Enter your Sex</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={sex => setSex(sex)}
                        defaultValue={sex}
                    />
                </View>
            
             
        </View>
    );
}

const styles = StyleSheet.create({
    welcomeContainer: {
        display: "flex"
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
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    inputTitle: {
        color: "#D59B9C",
        fontSize: 15,
        marginTop: 10
    },
    inputField: {
        borderWidth: 0.5,
        borderColor: "#D59B9C",
        height: 20,
        width: 100,
        borderRadius: 20,
        marginTop: 10
        
    }
})

export default PredictionScreen;