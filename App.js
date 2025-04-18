import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Ho from './screens/Home';
import Log from './screens/Login';
import Feeds from './screens/feed';
import Counter from './screens/counter';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



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
      </BottomTab.Navigator>
  );
}
export default function App(){

  const Stack = createStackNavigator();
  
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Login' component={Log}/>
      <Stack.Screen options={{headerShown:false}} name='HomeTab' component={BottomTab}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}