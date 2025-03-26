import {Text, View, StyleSheet, TextInput, Button} from 'react-native';


export default function Log(){
    return(
        <View style={styles.Log}>
            <View style={styles.titulo}>
                <Text><h1>Insira aqui seus dados:</h1></Text>
            </View>
            <View style={styles.input}>
                <TextInput
                    style={styles.input}
                    placeholder="Login"
                />
            </View>
            <View style={styles.input1}>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="Confirmar"
                    color="#841584"
                /> 
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    Log: {
        flex:1,
        backgroundColor: '#EA1'
    },
    titulo: {
        flex:1,
        marginTop: 100,
        alignItems: 'center'
    },
    input: {
        flex: 1,
        marginLeft: 75,
        marginRight: 75,
        marginTop: 120,
        fontSize: 30,
        textAlign: 'center'
    },
    button: {
        margin: 110
    }

})