import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Widget from './src/components/Widget';

import { theme } from './src/theme';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_500Medium });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]); 

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }} onLayout={onLayoutRootView}>
      <StatusBar style="light" backgroundColor='transparent' translucent />
      <Widget />
    </View>
  );
}
