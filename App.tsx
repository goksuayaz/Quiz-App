import { StatusBar } from 'expo-status-bar';
import QuizScreen from './src/app/QuizScreen';
import { View } from 'react-native';



export default function App() {

  return (
    <View style={{ flex: 1 }}>

      <QuizScreen />
      <StatusBar style="auto" />

    </View>
  )
}

