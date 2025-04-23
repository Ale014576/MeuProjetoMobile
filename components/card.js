import {View, Text, StyleSheet, Image} from 'react-native';

export default function Card({nome, valor, imagem}){
    return(
        <View style={styles.card}>
            <Image style={styles.img} source={{uri: imagem}}/>
            <View style={styles.lado}>
                <Text style={styles.textproduct}>{nome}</Text>
                <Text style={styles.textproduct}>R$ {valor}</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        margin: 10,
        backgroundColor: '#47292345',
        borderRadius: '8',
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    textproduct: {
        fontSize: 15,
    },
    img: {
        width: 100,
        height: 100,
    },
    lado: {
        alignItems: 'center'
    }

})