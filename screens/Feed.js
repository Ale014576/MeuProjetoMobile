import { View, Text, Image, Button, StyleSheet} from "react-native"

export default function Feeds(){
    return(
        <View>
            <Text>Feed do Ale</Text>
            <Text>Vai arrumar um trabalho...</Text>
            <Text>Medo de CLT é coisa de otário.</Text>

            <Image source={{uri: "https://www.google.com/imgres?q=clt&imgurl=http%3A%2F%2Ffranzoni.adv.br%2Fwp-content%2Fuploads%2F2017%2F09%2Fo-que-e-clt.jpg&imgrefurl=https%3A%2F%2Ffranzoni.adv.br%2Fo-que-e-clt-conheca-historia%2F&docid=gxXl-1fS5s3W8M&tbnid=c4krIZGv24cTgM&vet=12ahUKEwiF5NnL5bmMAxV7FLkGHTAsMHcQM3oECBcQAA..i&w=600&h=454&hcb=2&ved=2ahUKEwiF5NnL5bmMAxV7FLkGHTAsMHcQM3oECBcQAA"}}/>
            
            <Button title="Saiba Mais" onPress={() => navigation.navigate("Home")}/>
        </View>
    )
        
}

const style= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center"
    },
    img: {
        width:"300px",
        height:"300px"
    }
})