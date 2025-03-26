import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Ho from './screens/Home';
import Log from './screens/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function BottomTab() {

  const BottomTab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName='Login'
      >
        <BottomTab.Screen name='Login' component={Log}/>
        <BottomTab.Screen name='Home' component={Ho}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}