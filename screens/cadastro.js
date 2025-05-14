import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../controller';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function Registor({navigation}){
    const [Email, setEmail] = useState("");
    const [Senha, setSenha] = useState("");

    const cadastroUser = () => {
        createUserWithEmailAndPassword(auth, Email, Senha).then((userCredential) => {
            // Signed up 
            console.log("Cadastrado!", userCredential.user.email);
            navigation.navigate('Login');
          })
          .catch((error) => {
            console.log('Erro', error.message);

          });
    }

    return(
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text><h1>CADASTRAR:</h1></Text>
                <MaterialIcons name="login" size={24} color="black" />
            </View>
            <View style={styles.input}> 
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={Email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.input1}>    
                <TextInput
                    style={styles.input1}
                    placeholder="Senha"
                    value={Senha}
                    onChangeText={setSenha}
                    secureTextEntry={true}
                />
            </View>
                <View style={styles.button}>
                    <Button
                        color="black"
                        title="Cadastrar"
                        onPress={cadastroUser}
                    />
                    {/* <Button
                        color="black"
                        title="Login"
                        onPress={() => navigation.navigate('Login')}
                    /> */}

                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.input2}><h3>Deseja logar na sua conta?              Clique aqui!</h3></Text>
                    </TouchableOpacity>
                </View>
        </View> 
    );
}
              
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'gray'
    },
    titulo: {
        marginTop: 100,
        alignItems: 'center'
    },
    input: {
        marginTop: 40,
        marginLeft: 75,
        marginRight: 75,
        fontSize: 30,
        textAlign: 'center'
    },
    input1: {

        marginLeft: 75,
        marginRight: 75,
        marginTop: 40,
        fontSize: 30,
        textAlign: 'center'
    },
    input2: {
        marginTop: 40,
        textAlign: 'center'
    },
    button: {
        margin: 50
    }

})