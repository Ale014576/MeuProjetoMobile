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
                valor: parseFloat(Valor),
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
            <View style={styles.input1}>
                <TextInput
                    style={styles.input1}
                    placeholder="Valor"
                    value={Valor}
                    onChangeText={setValor}
                />
            </View>
            <View style={styles.input2}>
                <TextInput
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