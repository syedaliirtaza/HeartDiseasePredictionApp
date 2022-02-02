import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/core'

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.navigate("Home")
          }
        })
    
        return unsubscribe
      }, [])

    const handleSignUp = () => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
          })
          .catch(error => alert(error.message))
      }

    const handleLogin = () => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
          })
          .catch(error => alert(error.message))
      }

    return (
       <View style={styles.loginContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.headingTitle}>Welcome back to</Text>
                <Text style={styles.headingDesc}>HDPS App</Text>
            </View>        
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Enter your email'
                    style={styles.inputField}
                    onChangeText={email => setEmail(email)}
                    defaultValue={email}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Enter your password'
                    style={styles.inputField}
                    secureTextEntry
                    onChangeText={password => setPassword(password)}
                    defaultValue={password}
                />
            </View>
            <View style={styles.buttonContainer} >    
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonOutlineText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={handleSignUp} >
                    <Text style={[styles.buttonOutlineText, styles.buttonText]}>Register</Text>
                </TouchableOpacity>
            </View>
       </View>
    );
}

const styles = StyleSheet.create({
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
    loginContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    inputContainer: {
        width: "80%",
    },
    inputField: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10
    },
    buttonContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    },
    button: {
        width: 200,
        backgroundColor: "#C87777",
        padding: 15,
        borderRadius: 10,
        alignItems: "center"
    },
    buttonOutline: {
        backgroundColor: "white",
        marginTop: 10,
        borderColor: "black",
        borderWidth: 2
    },
    buttonOutlineText: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 16
    },
    buttonText: {
        color: "#A13333",
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default Login;