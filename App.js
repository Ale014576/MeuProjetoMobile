import { View, StyleSheet} from 'react-native';
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import {Log} from './screens/Login';
import Ho from './screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
        <Log/>
        <Ho/>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1 
  }
})