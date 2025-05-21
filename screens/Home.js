import {Text, View, StyleSheet, Image} from 'react-native';
import { ImageBackground } from 'react-native';
import fundo from '../assets/fundo.jpg';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Ho(){
    return(
        <View style={styles.profile}>
            <ImageBackground style={{flex: 1, width:'100%', height:'100%'}} source={fundo}>
                <View style={styles.text1}>
                    <MaterialIcons name="home" size={24} color="black" />
                    <Text><h1>Loja Nice sports</h1></Text>
                </View>
                <View style={styles.gallery}>
                    <Image style={styles.img} source={require('../assets/fut.jpg')}/>
                    <Image style={styles.img} source={require('../assets/cones.jpg')}/>
                </View>
                <View style={styles.text2}>
                    <Text><h2>A Loja Nice sports trás conforto e segurança para Criciúma.</h2></Text>
                </View>
                <View style={styles.gallery}>
                    <Image style={styles.img} source={require('../assets/xadrez.jpg')}/>
                    <Image style={styles.img} source={require('../assets/taco.jpg')}/>
                </View>
                <View style={styles.text3}>
                    <Text><h4>Venha você também conhecer a Loja Nice sports.</h4></Text>
                </View>
            </ImageBackground>
            
        </View>
    );
}

const styles = StyleSheet.create({
    profile: {
        flex:1,
        backgroundColor: '#EA1',
    },
    text1: { 
        alignItems: 'flex-start',
        padding: 20
    },
    gallery: {
        flex:2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text2: { 
        alignItems: 'flex-end',
    },
    text3: { 
        alignItems: 'center',
    },
    img: {
        width: 150,
        height: 150
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    }
    
})
