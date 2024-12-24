import { StatusBar } from 'expo-status-bar';
import QuizScreen from './src/app/QuizScreen';
import { View } from 'react-native';
import QuizProvider from './src/providers/QuizProvider';



export default function App() {

  return (
    <View style={{ flex: 1 }}>

      <QuizProvider>
        <QuizScreen />
      </QuizProvider>

      <StatusBar style="auto" />

    </View>
  )
}

