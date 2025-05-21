import {View, Text, StyleSheet, Image} from 'react-native';
import { Button } from 'react-native-web';

export default function Card({nome, valor, imagem}){
    return(
        <View style={styles.card}>
            <Image style={styles.img} source={{uri: imagem}}/>
            <View style={styles.lado}>
                <Text style={styles.textproduct}>{nome}</Text>
                <Text style={styles.textproduct}>R$ {valor}</Text>
                {/* <Button style={styles.button} color='black' title='Comprar'/> */}
            </View>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 370,
        height: 200,
        padding: 10,
        margin: 10,
        backgroundColor: '#47292345',
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 3
        
    },
    textproduct: {
        fontSize: 20,
        marginLeft: 30,
        
    },
/*     button: {
        marginLeft: 50,
    }, */
    img: {
        width: 150,
        height: 150,
        borderWidth: 4,
        borderRadius: 10,
        borderColor:'#800B25' ,

    },
    lado: {
        alignItems: 'center'
    }

})