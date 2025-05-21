import {View, Text, StyleSheet, Image, Button} from 'react-native';

export default function Card({nome, valor, imagem, comprar}){
    return(
        <View style={styles.card}>
            <Image style={styles.img} source={{uri: imagem}}/>
            <View style={styles.lado}>
                <Text style={styles.textproduct}>{nome}</Text>
                <Text style={styles.textproduct}>R$ {valor}</Text>
                <Button style={styles.button} color='black' title='Comprar' onPress={comprar}/>
            </View>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 370,
        height: 200,
        margin: 10,
        backgroundColor: '#47292345',
        borderRadius: 20,
        borderWidth: 3,
        alignItems: 'center',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center'
        
    },
    textproduct: {
        height: 40,
        fontSize: 20,
        alignSelf: 'center',
        textAlign: 'center'
        
    },
/*     button: {
        marginLeft: 50,
    }, */
    img: {
        width: 120,
        height: 120,
        borderWidth: 4,
        borderRadius: 10,
        borderColor:'#800B25' ,

    },
    lado: {
        alignItems: 'center'
    }

})