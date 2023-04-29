import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import AppStack from './src/components/stack/AppStack';
import useDimensionListener from './src/hooks/useDimensionListener';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  useDimensionListener();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" translucent={true} />
        <AppStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
