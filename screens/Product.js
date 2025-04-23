import { useState } from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import Card from '../components/card';

export default function Product(){
    const [produtos, setProdutos] = useState([
        {id:1, nome: 'Camisa', valor: 59.99 , imagem : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-ZJtfoj9PzkuWFRP0_B3T8n34Y4IxmWXyA&s'},
        {id:2, nome: 'Calça', valor: 149.99 , imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs9ixQD_xyI6NYCFN1KiIZPUDwmY3fbpdQsQ&s'},
        {id:3, nome: 'Tênis', valor: 449.99, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqizcZO6y1IYILPNIG2fuZ7Hzy8xzAVRRtA&s'},
        {id:4, nome: 'Moletom', valor: 109.99, imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlCoDQjZCqi8mk_e_Nb84IXHUXe-57IUFG2w&s'},
    ])
    
    return(
        <View style={styles.container}>
           {/*  <Text style={styles.text}>Produtos</Text>
            {produtos.map((item) => (
                <Text style={styles.text}>
                    {item.nome} - R$ {item.valor}
                </Text>
            ))} */}

            <Text style={styles.text}>Produtos</Text>
            <FlatList
            data = {produtos}
            renderItem={({item}) => (
                <Card
                nome={item.nome}
                valor={item.valor}
                imagem={item.imagem}
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
/*     img: {
        width: 100,
        height: 100,
    }, */
    text:{
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
        
    },
/*     card: {
        padding: 10,
        margin: 10,
        backgroundColor: '#47292345',
        borderRadius: '8',
        alignItems: 'center'
    },
    textproduct: {
        fontSize: 15
    }, */
    
})