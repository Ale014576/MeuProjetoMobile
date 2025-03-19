import {Text, View, StyleSheet, Image} from 'react-native';

export function Profile(){
    return(
        <View style={styles.profile}  justifyContent={'space-between'} alignItems={'center'}>
            <Text>Meu primeiro perfil.</Text>
            <Text>Nah, I'd Win.</Text>
            <Image style={styles.img} source={{uri:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7df6de16-e030-47e5-baae-04350d5468d5/diufntm-bee3f778-a941-44dd-beab-163d91cdc8e7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdkZjZkZTE2LWUwMzAtNDdlNS1iYWFlLTA0MzUwZDU0NjhkNVwvZGl1Zm50bS1iZWUzZjc3OC1hOTQxLTQ0ZGQtYmVhYi0xNjNkOTFjZGM4ZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.r-uY4ghxy8-5oUvIbfDDQMRxyOsFnOOUZvd48RcMGfM'}}/>
        </View>

    );

}


export default function Gallery(){
    return(
        <View style={styles.gallery} justifyContent={'center'} alignItems={'center'}>
                <Text>Meu Gallery.</Text>  
                <Image style={styles.img} source={require('../assets/god.gif')}/>
        </View>
           
         
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
    },
    profile: {
      flex:2,
      backgroundColor: '#EA1',
      justifyContent:'space-between',
      alignItems: 'center',
      flexDirection:'column'
    },
    gallery: {
      flex:2,
      backgroundColor: '#A12',
      justifyContent:'center',
      alignItems: 'center',
      flexDirection:'row'
    },
    img: {
        width: 200,
        height: 200
    }
})