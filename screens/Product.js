import { useEffect, useState } from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import Card from '../components/card';
import { db } from '../controller';
import { collection, doc, getDocs } from 'firebase/firestore';

export default function Product(){
    const [produtos, setProdutos] = useState([])
        useEffect(() => {
            async function carregarProdutos() {
                try {
                    const querySnaphot = await getDocs(collection(db, 'Produtos'));
                    const lista = [];
                    querySnaphot.forEach((doc) => {
                        lista.push({id : doc.id, ...doc.data()});
                    });
                    setProdutos(lista);
                } catch (error) {
                    console.log('Produto não encontrado.', error);
                }
            }
            carregarProdutos();
        }, []);
    
    
    return(
        <View style={styles.container}>
           {/*  <Text style={styles.text}>Produtos</Text>
            {produtos.map((item) => (
                <Text style={styles.text}>
                    {item.nome} - R$ {item.valor}
                </Text>
            ))} */}

            <Text style={styles.text}>Produtos</Text>
            <FlatList /* style={styles.card} */
            data = {produtos}
            renderItem={({item}) => (
                <Card
                nome={item.Nome}
                valor={item.Valor}
                imagem={item.Imagem}
                />


                /* <View style={styles.card}>
                    <Image style={styles.img} source={{uri: item.imagem}}/>
                    <Text style={styles.textproduct}>{item.nome}</Text>
                    <Text style={styles.textproduct}>R$ {item.valor}</Text>
                    
                </View> */
            )}
            keyExtractor={item => item.id}
            
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    text:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    card: {
        padding: 10,
        margin: 10,
        backgroundColor: '#47292345',
        borderRadius: '8',
        alignSelf: 'center'
    },
    
})