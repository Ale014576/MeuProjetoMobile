import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { auth } from '../controller';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';


export default function Log({navigation}){

    const [Email, setEmail] = useState("");
    const [Senha, setSenha] = useState("");

    const VerifyUser = () => {
        signInWithEmailAndPassword(auth, Email, Senha).then((userCredential) => {
            console.log('Usuário logado', userCredential.user.email);
        })
        .catch((error) => {
            console.log('Erro ao logar', error.message);
        });
        
    }

    return(
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text><h1>LOGIN:</h1></Text>
                <MaterialIcons name="login" size={24} color="black" />
            </View>
            <View style={styles.input}>
                <TextInput
                    style={styles.input}
                    placeholder="Login"
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
                    onPress={() => navigation.navigate('Cadastrar')}
                />
                <Button
                    color="black"
                    title="Entrar"
                    onPress={VerifyUser}
                />
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
    button: {
        margin: 50
    }

})