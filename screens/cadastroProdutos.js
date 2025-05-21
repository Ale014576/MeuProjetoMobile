import { useState } from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import { db } from '../controller';
import { collection, addDoc } from 'firebase/firestore';

export default function AddProdutos(){

    const [Nome, setNome] = useState("");
    const [Valor, setValor] = useState("");
    const [Imagem, setImagem] = useState("");

    const CadastrarProduto = async () => {
        try {
            await addDoc(collection(db, 'Produtos'), {
                Nome,
                Valor: parseFloat(Valor),
                Imagem
            });
            setNome("");
            setValor("");
            setImagem("");
        }
        catch (error) {
            console.log("Erro ao cadastrar", error);
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text><h1>Cadastros</h1></Text>
            </View>
            <View style={styles.input}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Produto"
                    value={Nome}
                    onChangeText={setNome}
                />
            </View>
            <View>
                <TextInput
                    style={styles.input1}
                    placeholder="Valor"
                    value={Valor}
                    onChangeText={setValor}
                />
            </View>
            <View>
                <TextInput
                    style={styles.input2}
                    placeholder="Imagem"
                    value={Imagem}
                    onChangeText={setImagem}
                />
            </View>
            <View style={styles.button}>
                <Button
                    color="black"
                    title="Cadastrar Produto"
                    onPress={CadastrarProduto}
                />
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'gray',
        justifyContent: 'space-around'
    },
    titulo: {
        /* marginTop: 100, */
        alignItems: 'center'
    },
    input: {
        fontSize: 30,
        alignSelf: 'center',
        textAlign: 'center'
    },
    input1: {
        fontSize: 30,
        alignSelf: 'center',
        textAlign: 'center'
    },
    input2: {
        fontSize: 30,
        alignSelf: 'center',
        textAlign: 'center'
    },
    button: {
        width: 300,
        height: 100,
        alignSelf: 'center'
    }

})