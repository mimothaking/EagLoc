import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
import { useNavigation } from '@react-navigation/core'
import LottieView from 'lottie-react-native'

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect( () => {
       const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Home")
            }
        })
        return unsubscribe
    } , [])

    const handleSignUp = () =>{
        auth.createUserWithEmailAndPassword(email, password).then(userCredentials => 
            {
                const user = userCredentials.user;
            console.log('Registered with :',user.email)
            })
            .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password).then(userCredentials => {
            const user = userCredentials.user;
            console.log('LoggedIn with :',user.email)
        })
            .catch(error => alert(error.message))
    }

  return (
    
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View style={[StyleSheet.absoluteFillObject, styles.anim]}>
              <LottieView source={require('../Images/lf20_odojxouu.json')} autoPlay loop />
          </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Email' 
        value={email} onChangeText={text => setEmail(text)}
        style={styles.input}
        />
        <TextInput placeholder='Password'
        value={password} onChangeText={text => setPassword(text)}
        style={styles.input}
        secureTextEntry
        />
        
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity
      onPress={handleLogin}
      style={styles.button}
      >
        <Text style={styles.buttonText}>LogIn</Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={handleSignUp}
       style={[styles.button, styles.buttonOutline]}
       >
       <Text style={styles.buttonOutlineText}>Register</Text>
       </TouchableOpacity>

      </View>
          
      </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: '#b4c4d4',
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#b4c4d4',
        borderWidth: 2,
    },
    buttonOutlineText: {
        color: '#b4c4d4',
        fontWeight: '700',
        fontSize: 16
    },
    anim:{
        marginBottom: 450,
        width: 300,
        height: 300,
        marginLeft: 40
    }
})