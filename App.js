import 'react-native-gesture-handler';
import { initializeApp } from 'firebase/app';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Ho from './screens/Home';
import Log from './screens/Login';
import Feeds from './screens/feed';
import Counter from './screens/counter';
import Registor from './screens/cadastro';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Product from './screens/Product';
import AddProdutos from './screens/cadastroProdutos';
import { CartProvider } from './components/CarProvider';
import { Carrinho } from './components/carrinho';



function BottomTab() {

  const BottomTab = createBottomTabNavigator();

  return (
      <BottomTab.Navigator 
       
      screenOptions={{
        tabBarActiveTintColor:'#A5A692',
        tabBarActiveBackgroundColor: '#13678A',
        tabBarInactiveBackgroundColor: '#79717A',
        tabBarInactiveTintColor: '#146152',
        headerStyle:{backgroundColor: '#3F7C851B'},
        headerTintColor: '#D9042B'
      }}
      >
        
        <BottomTab.Screen name='Home' component={Ho} options={{
          tabBarIcon: () => (
            <MaterialIcons name="home" size={24} color="black" />
          ),
        }}/>
        <BottomTab.Screen name="Feeds" component={Feeds} options={{
          tabBarIcon: () => (
            <MaterialIcons name="feed" size={24} color="black"/>
          ),
        }}/>
        <BottomTab.Screen name='Counter' component={Counter} options={{
          tabBarIcon: () =>(
            <MaterialCommunityIcons name="counter" size={24} color="black" />
          )
        }}/>
        <BottomTab.Screen name='Produtos' component={Product} options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="shopping-outline" size={24} color="black" />
          )
        }}/>
        <BottomTab.Screen name='cadastroProdutos' component={AddProdutos} options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="bookmark-plus" size={24} color="black" />
          ),
        }}/>
        <BottomTab.Screen name='Carrinho' component={Carrinho} options={{
          tabBarIcon: () => (
              <MaterialCommunityIcons name="cart" size={24} color="black" />
          ),
          }}/>
      </BottomTab.Navigator>
  );
}
export default function App(){

  const Stack = createStackNavigator();
  
  return(
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Log}/>
          <Stack.Screen name='Cadastrar' component={Registor}/>
          <Stack.Screen options={{headerShown:false}} name='HomeTab' component={BottomTab}/>
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>

    
  )
}