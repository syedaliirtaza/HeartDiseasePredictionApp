import React, { useState } from 'react';
import { TextInput ,View, StyleSheet, Text, ScrollView, Pressable} from 'react-native';

function Prediction(props) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [ sex, setSex ] = useState('');
    const [ cp, setCp ] = useState('');
    const [ trestbps, setTrestbps] = useState('');
    const [chol, setChol] = useState('');
    const [fbs, setFbs] = useState('');
    const [restecg, setRestecg] = useState('');
    const [thalach, setThalach] = useState('');
    const [exang, setExang] = useState('');
    const [ldpeak, setLdpeak] = useState('');
    const [slope, setSlope] = useState('');
    const [ca, setCa] = useState('');
    const [thal, setThal] = useState('');
  

    return (
        <ScrollView>
        <View style={styles.welcomeContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.headingTitle}>Please enter your</Text>
                    <Text style={styles.headingDesc}>Patient's Symptoms</Text>
                </View>
            
                    <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>Please enter person's name</Text>
                        <Pressable onPress={()=>alert("Enter the patient's name")}>
                        <Text style={
                            {
                            borderWidth: 1,
                            width: 20,
                            height: 20,
                            borderRadius: 20,
                            textAlign: "center",
                            display: "flex",
                            marginTop: 3
                            }
                            }>!</Text>
                            </Pressable>
                        <TextInput
                            style={styles.inputField}
                            onChangeText={name => setName(name)}
                            defaultValue={name}
                            placeholderStyle={{color: "red"}}
                        />
                        <Text style={styles.inputTitle}>Please enter person's age</Text>
                        <Pressable onPress={()=>alert("Enter Age i.e 30")}>
                        <Text style={
                            {
                            borderWidth: 1,
                            width: 20,
                            height: 20,
                            borderRadius: 20,
                            textAlign: "center",
                            display: "flex",
                            marginTop: 3
                            }
                            }>!</Text>
                            </Pressable>
                        <TextInput
                            style={styles.inputField}
                            onChangeText={age => setAge(age)}
                            defaultValue={age}
                            keyboardType='numeric'
                        />
                        <Text style={styles.inputTitle}>Please enter erson's sex</Text>
                        <Pressable onPress={()=>alert("1: Male , 0: Female")}>
                        <Text style={
                            {
                            borderWidth: 1,
                            width: 20,
                            height: 20,
                            borderRadius: 20,
                            textAlign: "center",
                            display: "flex",
                            marginTop: 3
                            }
                            }>!</Text>
                            </Pressable>
                        <TextInput
                            style={styles.inputField}
                            keyboardType='numeric'
                            onChangeText={sex => setSex(sex)}
                            defaultValue={sex}
                        />
                        <Text style={styles.inputTitle}>Person's chest pain</Text>
                        <Pressable onPress={()=>alert("1: typical angina, 2: atypical angina, 3: non-anginal pain, 4: asymptomatic")}>
                        <Text style={
                            {
                            borderWidth: 1,
                            width: 20,
                            height: 20,
                            borderRadius: 20,
                            textAlign: "center",
                            display: "flex",
                            marginTop: 3
                            }
                            }>!</Text>
                            </Pressable>
                        <TextInput
                            style={styles.inputField}
                            onChangeText={cp => setCp(cp)}
                            defaultValue={cp}
                            placeholderStyle={{color: "red"}}
                            keyboardType='numeric'
                        />
                        <Text style={styles.inputTitle}>Person's resting blood pressure</Text>
                        <Pressable onPress={()=>alert("The person's resting blood pressure (mm Hg on admission to the hospital)")}>
                        <Text style={
                            {
                            borderWidth: 1,
                            width: 20,
                            height: 20,
                            borderRadius: 20,
                            textAlign: "center",
                            display: "flex",
                            marginTop: 3
                            }
                            }>!</Text>
                            </Pressable>
                        <TextInput
                            style={styles.inputField}
                            onChangeText={trestbps => setTrestbps(trestbps)}
                            defaultValue={trestbps}
                            keyboardType='numeric'
                        />
                        <Text style={styles.inputTitle}>Person's cholesterol</Text>
                        <Pressable onPress={()=>alert("The person's cholesterol measurement in mg/dl")}>
                        <Text style={
                            {
                            borderWidth: 1,
                            width: 20,
                            height: 20,
                            borderRadius: 20,
                            textAlign: "center",
                            display: "flex",
                            marginTop: 3
                            }
                            }>!</Text>
                            </Pressable>
                        <TextInput
                            style={styles.inputField}
                            onChangeText={chol => setChol(chol)}
                            defaultValue={chol}
                            keyboardType='numeric'
                        />
                        <Text style={styles.inputTitle}>Person's fasting blood sugar</Text>
                        <Pressable onPress={()=>alert("The person's fasting blood sugar (&gt; 120 mg/dl, 1 = true; 0 = false)")}>
                        <Text style={
                            {
                            borderWidth: 1,
                            width: 20,
                            height: 20,
                            borderRadius: 20,
                            textAlign: "center",
                            display: "flex",
                            marginTop: 3
                            }
                            }>!</Text>
                            </Pressable>
                        <TextInput
                            style={styles.inputField}
                            onChangeText={fbs => setFbs(fbs)}
                            defaultValue={fbs}
                            keyboardType='numeric'
                        />
                        <Text style={styles.inputTitle}>Resting electrocardiographic measurement</Text>
                        <Pressable onPress={()=>alert("0 = normal, 1 = having ST-T wave abnormality, 2 = showing probable or definite left ventricular hypertrophy by Estes' criteria")}>
                        <Text style={
                            {
                            borderWidth: 1,
                            width: 20,
                            height: 20,
                            borderRadius: 20,
                            textAlign: "center",
                            display: "flex",
                            marginTop: 3
                            }
                            }>!</Text>
                            </Pressable>
                        <TextInput
                            style={styles.inputField}
                            onChangeText={restecg => setRestecg(restecg)}
                            defaultValue={restecg}
                            keyboardType='numeric'
                        />
                        <Text style={styles.inputTitle}>Person's maximum heart rate achieved</Text>
                        <Pressable onPress={()=>alert("The person's maximum heart rate achieved")}>
                        <Text style={
                            {
                            borderWidth: 1,
                            width: 20,
                            height: 20,
                            borderRadius: 20,
                            textAlign: "center",
                            display: "flex",
                            marginTop: 3
                            }
                            }>!</Text>
                            </Pressable>
                        <TextInput
                            style={styles.inputField}
                            onChangeText={thalach => setThalach(thalach)}
                            defaultValue={thalach}
                            keyboardType='numeric'
                        />
                        <Text style={styles.inputTitle}>Exercise induced angina </Text>
                        <Pressable onPress={()=>alert("Exercise induced angina (1 = yes; 0 = no)")}>
                        <Text style={
                            {
                            borderWidth: 1,
                            width: 20,
                            height: 20,
                            borderRadius: 20,
                            textAlign: "center",
                            display: "flex",
                            marginTop: 3
                            }
                            }>!</Text>
                            </Pressable>
                        <TextInput
                            style={styles.inputField}
                            onChangeText={exang => setExang(exang)}
                            defaultValue={exang}
                            keyboardType='numeric'
                        />
                        <Text style={styles.inputTitle}>ST depression</Text>
                        <Pressable onPress={()=>alert("ST depression induced by exercise relative to rest ('ST' relates to positions on the ECG plot.)")}>
                        <Text style={
                            {
                            borderWidth: 1,
                            width: 20,
                            height: 20,
                            borderRadius: 20,
                            textAlign: "center",
                            display: "flex",
                            marginTop: 3
                            }
                            }>!</Text>
                            </Pressable>
                        <TextInput
                            style={styles.inputField}
                            onChangeText={ldpeak => setLdpeak(ldpeak)}
                            defaultValue={ldpeak}
                            keyboardType='numeric'
                        />
                        <Text style={styles.inputTitle}>Peak slope ST segment </Text>
                        <Pressable onPress={()=>alert("The slope of the peak exercise ST segment (Value 1: upsloping, Value 2: flat, Value 3: downsloping)")}>
                        <Text style={
                            {
                            borderWidth: 1,
                            width: 20,
                            height: 20,
                            borderRadius: 20,
                            textAlign: "center",
                            display: "flex",
                            marginTop: 3
                            }
                            }>!</Text>
                            </Pressable>
                        <TextInput
                            style={styles.inputField}
                            onChangeText={slope => setSlope(slope)}
                            defaultValue={slope}
                            keyboardType='numeric'
                        />
                        <Text style={styles.inputTitle}>Major vessels </Text>
                        <Pressable onPress={()=>alert("The number of major vessels (0-3)")}>
                        <Text style={
                            {
                            borderWidth: 1,
                            width: 20,
                            height: 20,
                            borderRadius: 20,
                            textAlign: "center",
                            display: "flex",
                            marginTop: 3
                            }
                            }>!</Text>
                            </Pressable>
                        <TextInput
                            style={styles.inputField}
                            onChangeText={ca => setCa(ca)}
                            defaultValue={ca}
                            keyboardType='numeric'
                        />
                        <Text style={styles.inputTitle}>Blood disorder  </Text>
                        <Pressable onPress={()=>alert("A blood disorder called thalassemia (3 = normal; 6 = fixed defect; 7 = reversable defect)")}>
                        <Text style={
                            {
                            borderWidth: 1,
                            width: 20,
                            height: 20,
                            borderRadius: 20,
                            textAlign: "center",
                            display: "flex",
                            marginTop: 3
                            }
                            }>!</Text>
                            </Pressable>
                        <TextInput
                            style={styles.inputField}
                            onChangeText={thal => setThal(thal)}
                            defaultValue={thal}
                            keyboardType='numeric'
                        />
                    </View> 
                </View>            
        </ScrollView>       
        
    );
}

const styles = StyleSheet.create({
    welcomeContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }, 
    textContainer: {
        display: "flex",
        marginTop: 20
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
        marginTop: 10,
        marginBottom: 50
    },
    inputTitle: {
        color: "#A13333",
        fontSize: 15,
        marginTop: 10
    },
    inputField: {
        borderWidth: 0.5,
        borderColor: "#D59B9C",
        height: 30,
        width: 200,
        borderRadius: 20,
        marginTop: 10, 
    },
    btn: {

    }
})

export default Prediction;