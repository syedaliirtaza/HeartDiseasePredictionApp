import React from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList} from 'react-native';

function Tips(props) {

    const healthTips = {
        heading: "Drink Water",
        description: "Drink water after every 2 hours to stay hydrated."
    }
    // const healthTips =[ 
    //     {
    //     heading: "Drink Water",
    //     description: "Drink water after every 2 hours to stay hydrated."
    //     },
    //     {
    //     heading: "Drink Water",
    //     description: "Drink water after every 2 hours to stay hydrated."
    //     }
    // ]

    // const hTips = [];
    // for(let i=0; i<=healthTips.length; i++){
    //     hTips.push(
    //         <View key={i} style={styles.tipsBox}>
    //             <Text style={styles.tipsHeading}>{healthTips[i].heading}</Text>
    //             <Text style={styles.tipsDescription}>{healthTips[i].description}</Text>
    //         </View>
    //     )
    // }

    return (
        <View style={styles.tipsContainer}>
                <View style={styles.tipsBox}>
                    <Text style={styles.tipsHeading}>{healthTips.heading}</Text>
                    <Text style={styles.tipsDescription}>{healthTips.description}</Text>
                </View>
                {/* {hTips} */}
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
        backgroundColor: "#E8C5C5",
        borderWidth: 0.5,
        borderColor: "#D59B9C",
        height: "auto",
        width: 350,
        borderRadius: 20,
        padding: 10 
    },
    tipsHeading: {
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