import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput} from "react-native";
import { useState } from "react";

export default function Counter(){
    const [contador, setContador] = useState(0);
    function Aumentar(){
        setContador(contador + 1)
    }

    function Diminuir(){
        if (contador > 0){
            setContador(contador - 1)
        }
        
    }
    function Pergunta1(){
        
    }
    
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>Contador do Ale</Text>
            <Text style = {styles.text}>Contador: {contador} </Text>
            
            <View style = {styles.button}>
                <TouchableOpacity style={styles.botao} onPress={Aumentar}>
                    <Text style={styles.Txtbotao}>+</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.botao} onPress={Diminuir}>
                    <Text style={styles.Txtbotao}>-</Text>
                </TouchableOpacity>
                
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Coloque o primeiro num: "
                    keyboardType='Int'
                />
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Coloque o segundo num: "
                    keyboardType='Int'
                />
            </View>
            
            
        </View>
    )
        
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#A5A692',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    title: {
        fontSize:40
    },
    text:{
        fontSize: 25,
        justifyContent: 'space-around'
    },
    input:{
        fontSize: 15,
        borderColor: 'black',
        borderWidth: 1,
    },
    button:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        
    },
    botao:{
        backgroundColor: '#3E3E40',
        borderRadius: 5,
        width: '30%'
    },
    Txtbotao:{
        textAlign: 'center',
        color: 'white',
        fontSize: 30
    }
})