
import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import appFirebase from '../credenciales';

const auth = getAuth(appFirebase)

export default function Login(props) {

    //creamos las variable de estado
    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const logueo = async()=>{
        try {
            await signInWithEmailAndPassword(auth,email, password)
            Alert.alert('iniciando secion','accediendo...')
            props.navigation.navigate('Home')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style = {styles.padre}>

            <View>
                <Image source={require('../assets/alumno_image1.png')} style={styles.profile} />
            </View>

            <View style={styles.tarjeta}>

                <View style={styles.cajaTexto}>
                    <TextInput placeholder="correo@gmail.com" style={{paddingHorizontal:15}}
                    onChangeText={(text)=>setemail(text)}
                    />
                </View>

                <View style={styles.cajaTexto}>
                    <TextInput placeholder="Password" style={{paddingHorizontal:15}} 
                    onChangeText={(text)=>setpassword(text)}
                    secureTextEntry={true}/>
                </View>

                <View style={styles.padrebBoton}>

                    <TouchableOpacity style={styles.cajaBoton} onPress={logueo} >
                        <Text style={styles.textoBoton}>Sign In</Text>
                    </TouchableOpacity>
                </View>


            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    padre:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    profile:{
        width:100,
        height:100,
        borderRadius:50,
        borderColor:'white'
    },
    tarjeta:{
        margin:20,
        backgroundColor:'white',
        borderRadius:20,
        width:'90%',
        padding:20,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,

    },
    cajaTexto:{
        paddingVertical:20,
        backgroundColor:'#cccccc40',
        borderRadius:40,
        marginVertical:10
    },
    padrebBoton:{
        alignItems:'center',
    },
    cajaBoton:{
        backgroundColor:'#525fe1',
        borderRadius:30,
        paddingVertical:20,
        width:150,
        marginTop:20
    },
    textoBoton:{
        textAlign:'center',
        color:'white'
    }

}); 

/*
import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

export default function Login(props) {

    // Creamos las variables de estado
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const logueo = async () => {
        try {
            // Realizamos la autenticación sin usar getAuth
            await auth().signInWithEmailAndPassword(email, password);
            Alert.alert('Iniciando sesión', 'Accediendo...');
            props.navigation.navigate('Home');
        } catch (error) {
            console.log(error);
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View style={styles.padre}>
            <View>
                <Image source={require('../assets/alumno_image1.png')} style={styles.profile} />
            </View>

            <View style={styles.tarjeta}>
                <View style={styles.cajaTexto}>
                    <TextInput
                        placeholder="correo@gmail.com"
                        style={{ paddingHorizontal: 15 }}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                </View>

                <View style={styles.cajaTexto}>
                    <TextInput
                        placeholder="Password"
                        style={{ paddingHorizontal: 15 }}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.padrebBoton}>
                    <TouchableOpacity style={styles.cajaBoton} onPress={logueo}>
                        <Text style={styles.textoBoton}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    padre: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    profile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: 'white'
    },
    tarjeta: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    cajaTexto: {
        paddingVertical: 20,
        backgroundColor: '#cccccc40',
        borderRadius: 40,
        marginVertical: 10
    },
    padrebBoton: {
        alignItems: 'center'
    },
    cajaBoton: {
        backgroundColor: '#525fe1',
        borderRadius: 30,
        paddingVertical: 20,
        width: 150,
        marginTop: 20
    },
    textoBoton: {
        textAlign: 'center',
        color: 'white'
    }
});


*/






