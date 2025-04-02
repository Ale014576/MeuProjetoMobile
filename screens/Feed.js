import { View, Text, Image, Button, StyleSheet} from "react-native";

export default function Feeds(){
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>Feed do Ale</Text>
            <Text style = {styles.text}>Vai arrumar um trabalho...</Text>
            <Text style = {styles.text}>Medo de CLT é coisa de otário.</Text>

            
            <Image style = {styles.img} source={{uri: "https://bmcnews.com.br/wp-content/uploads/2024/12/CLT-Brasil_1734033033861.jpg"}}/>
            
            <View style = {styles.button}>
                <Button title="Saiba Mais" onPress={() => navigation.navigate('Home')}/>
            </View>
            
        </View>
    )
        
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#A5A692'
    },
    title: {
        flex: 1,
        textAlign: "center",
        justifyContent:'center',
        fontSize:40
    },
    text:{
        flex:1,
        textAlign:"center",
        fontSize: 25
        
    },
    img: {
        width:300,
        height:300,
        alignSelf: 'center'
    },
    button:{
        marginTop: 90
    }
})