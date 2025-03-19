import {Text, View, StyleSheet, Image} from 'react-native';
import { ImageBackground } from 'react-native-web';


export default function Gallery(){
    return(
        <View style={styles.profile}>
            
            <View style={styles.text1}>
                <Text>Nah, I'd Win.</Text>
            </View>
            <View style={styles.gallery}>
                <Image style={styles.img} source={require('../assets/god.gif')}/>
                <Image style={styles.img} source={require('../assets/god.gif')}/>
            </View>
            <View style={styles.text2}>
                <Text>Nah, I'd Win.</Text>
            </View>
            <View style={styles.gallery}>
                <Image style={styles.img} source={require('../assets/god.gif')}/>
                <Image style={styles.img} source={require('../assets/god.gif')}/>
            </View>
            <View style={styles.text3}>
                <Text>Nah, I'd Win.</Text>
            </View>
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
    }
})