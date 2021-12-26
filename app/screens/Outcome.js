import React ,{useState, useEffect} from 'react';
import { View, StyleSheet, Text, Pressable} from 'react-native';
import { useStore } from "react-redux";

function Outcome({navigation}) {
    const store = useStore();
    const state = store.getState();
    const user = state.userReducer;

    const [items, setItems] = useState([]);
    const [isResultShown, setIsResultShown] = useState(false);
    const [isloaded, setIsLoaded] = useState("");

    useEffect(() => {
        setItems(user)
      }, []);

    const valueJson = JSON.stringify({
        age: items.age,
        "sex": items.sex,
        "cp": items.cp,
        "trestbps": items.trestbps,
        "chol": items.chol,
        "fbs": items.fbs,
        "restecg": items.restecg,
        "thalach": items.thalach,
        "exang": items.exang,
        "oldpeak": items.ldpeak,
        "slope": items.slope,
        "ca": items.ca,
        "thal": items.thal
    });

    console.log("json value we will use")
    console.log(valueJson)


    const getPrediciton = () => {
        console.log("Fetch api call");

            const requestOptions = {
            method: 'POST',
            headers: {
                 Accept: 'application/json',
                'Content-Type': 'application/json'},
            body: valueJson
            };

            fetch("https://c0l8c9qbj4.execute-api.us-east-1.amazonaws.com/Prod/predict-heart-disease", requestOptions)
            .then((response) => response.json())
            .then((json) => {
                setIsLoaded(json);
            })
            .catch((error)=>{
                alert(error.message)
            })
    }           

    return (
        <View style={styles.outcomeContainer}>
        { !isResultShown ? 
        (
            <View style={styles.outcomeValue}>
                <View>
                    <Text style={styles.heading}>Be Patient</Text>
                </View>
            <View style={styles.valueContainer}>
                <Text style={styles.valueText}>Please Confirm the values before procedding</Text>
                <Text style={styles.valueText}>Name is: <Text style={{fontWeight: "bold"}}>{items.name}</Text></Text>
                <Text style={styles.valueText}>Age is: <Text style={{fontWeight: "bold"}}>{items.age}</Text></Text>
                <Text style={styles.valueText}>Sex is: <Text style={{fontWeight: "bold"}}>{items.sex}</Text></Text>
                <Text style={styles.valueText}>CP is: <Text style={{fontWeight: "bold"}}>{items.cp}</Text></Text>
                <Text style={styles.valueText}>Trestbps is: <Text style={{fontWeight: "bold"}}>{items.trestbps}</Text></Text>
                <Text style={styles.valueText}>Chol is: <Text style={{fontWeight: "bold"}}>{items.chol}</Text></Text>
                <Text style={styles.valueText}>Fbs is: <Text style={{fontWeight: "bold"}}>{items.fbs}</Text></Text>
                <Text style={styles.valueText}>RestEcg is: <Text style={{fontWeight: "bold"}}>{items.restecg}</Text></Text>
                <Text style={styles.valueText}>Thalach is: <Text style={{fontWeight: "bold"}}>{items.thalach}</Text></Text>
                <Text style={styles.valueText}>Exang is: <Text style={{fontWeight: "bold"}}>{items.exang}</Text></Text>
                <Text style={styles.valueText}>Ldpeak is: <Text style={{fontWeight: "bold"}}>{items.ldpeak}</Text></Text>
                <Text style={styles.valueText}>Slope is: <Text style={{fontWeight: "bold"}}>{items.slope}</Text></Text>
                <Text style={styles.valueText}>Ca is: <Text style={{fontWeight: "bold"}}>{items.ca}</Text></Text>
                <Text style={styles.valueText}>Thal is: <Text style={{fontWeight: "bold"}}>{items.thal}</Text></Text>
                <View style={styles.outcomeButton}>
                <Pressable onPress={()=> {
                    setIsResultShown(!isResultShown)
                    getPrediciton()
                    }}>
                    <Text style={styles.text}>Get Prediciton</Text>  
                </Pressable>
            </View>
       </View>
       </View>
       )
       : 
        (<View style={styles.predictingContainer}>
            <Text style={styles.predictingText}>Fetching reult</Text>
            <Text style={styles.predictingTextDescription}>{items.name}: Please note that the prediction label 1 means <Text style={{fontWeight: "bold"}}>Person has Heart Disease</Text> and 0 means <Text style={{fontWeight: "bold"}}>Person doesn't has Heart Disease</Text> and confidence value is its accuracy</Text>  
            <Text style={styles.realResult}>{isloaded}</Text> 
        </View>)
    }
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
    valueContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    outcomeValue: {
        justifyContent: "center",
        alignItems: "center"
    },
    outcomeButton: {
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: "#C87777",
        borderWidth: 0.5,
        borderColor: "gray",
        padding: 15,
        borderRadius: 20,
    },
    text: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold"
    },
    valueText: {
        fontSize: 12,
        marginVertical: 5
    },
    heading: {
        fontSize: 50,
        fontFamily: "sans-serif-condensed",
        fontWeight: "bold",
        color: "#A44444",
        position: "relative",
        left: -15,
    },
    predictingText: {
        fontSize: 50,
        fontFamily: "sans-serif-condensed",
        fontWeight: "bold",
        color: "#A44444",
        textAlign: "center"
    },
    predictingTextDescription: {
        fontSize: 15,
        color: "black",
        padding: 10
    },
    predictingContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    realResult: {
        marginHorizontal: 10,
        marginVertical: 20,
        fontSize: 20,
        fontWeight: "bold",
        color: '#A44444',
        backgroundColor: "#F7ECEC",
        borderWidth: 0.5,
        borderColor: "gray",
        padding: 15,
        borderRadius: 20,
        width: 300,
        textAlign: "center"
    }
    
})

export default Outcome;