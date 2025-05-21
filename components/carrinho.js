import { View, Text, Image, Button, FlatList, StyleSheet } from "react-native";
import { useCarrinho } from "./CarProvider";


export function Carrinho(){
    const {Carrinho} = useCarrinho();
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Carrinho </Text>
            <FlatList 
                data={Carrinho} 
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <Image style={styles.img} source={{uri: item.Imagem}}/>
                        <View style={styles.lado}>
                            <Text style={styles.textproduct}>{item.Nome}</Text>
                            <Text style={styles.textproduct}>R$ {item.Valor}</Text>
                        </View>
                    </View>
                )}
            />
            
        </View>
                    
                    
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
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
    title: {
        height: 40,
        fontSize: 40,
        alignSelf: 'center',
        textAlign: 'center'
    },
    textproduct: {
        height: 40,
        fontSize: 20,
        alignSelf: 'center',
        textAlign: 'center'
        
    },
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