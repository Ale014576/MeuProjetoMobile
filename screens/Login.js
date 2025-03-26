import {Text, View, StyleSheet, TextInput, Button} from 'react-native';


export default function Log({navigation}){
    return(
        <View style={styles.Log}>
            <View style={styles.titulo}>
                <Text><h1>Insira aqui seus dados:</h1></Text>
            </View>
            <View style={styles.input}>
                <TextInput
                    style={styles.input}
                    placeholder="Login"
                    keyboardType='String'
                />
            </View>
            <View style={styles.input1}>
                <TextInput
                    style={styles.input1}
                    placeholder="Senha"
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.button}>
                <Button
                    color="black"
                    title="Login"
                    onPress={() => navigation.navigate('Home')}
                />
            </View> 
        </View>
    );
}

const styles = StyleSheet.create({
    Log: {
        flex:1,
        backgroundColor: 'gray'
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
        marginTop: 50,
        fontSize: 30,
        textAlign: 'center'
    },
    input1: {
        flex: 1,
        marginLeft: 75,
        marginRight: 75,
        marginTop: 80,
        fontSize: 30,
        textAlign: 'center'
    },
    button: {
        margin: 150
    }

})