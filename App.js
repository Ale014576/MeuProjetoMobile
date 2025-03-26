import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Ho from './screens/Home';
import Log from './screens/Login';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Log}/>
        <Stack.Screen name='home' component={Ho}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}