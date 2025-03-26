import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Ho from './screens/Home';
import Log from './screens/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function BottomTab() {

  const BottomTab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <BottomTab.Navigator 
      initialRouteName='Login' 
      screenOptions={{
        tabBarActiveTintColor:'#A5A692',
        tabBarActiveBackgroundColor: '#13678A',
        tabBarInactiveBackgroundColor: '#9AEBA3',
        tabBarInactiveTintColor: '#146152',
        headerStyle:{backgroundColor: '#3F7C851B'},
        headerTintColor: '#D9042B'
      }}
      >
        <BottomTab.Screen name='Login' component={Log} 
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="login" size={24} color="black" />
          ),
          
        }}/>
        <BottomTab.Screen name='Home' component={Ho} options={{
          tabBarIcon: () => (
            <MaterialIcons name="home" size={24} color="black" />
          ),
        }}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}