import React from 'react';
import { View, StyleSheet, Text, Button, Pressable} from 'react-native';

function Outcome({navigation}) {
    return (
       <View style={styles.outcomeContainer}>
       
           <Pressable
                onPress={()=> alert("h")}>
                    <Text>The Person x doesn't have a Heart Disease with the confidence of 91.1%</Text>
                </Pressable>
       </View>
    );
}

const styles = StyleSheet.create({
    outcomeContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
})

export default Outcome;