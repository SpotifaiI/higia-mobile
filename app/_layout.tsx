import {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts
} from '@expo-google-fonts/poppins';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { View } from 'react-native';

import { CollaboratorsProvider } from '../contexts/CollaboratorsContext';
import { TasksProvider } from '../contexts/TasksContext';

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [isFontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  const onLayoutRootBuilt = useCallback(async () => {
    if (isFontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isFontsLoaded]);

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootBuilt}>
      <StatusBar style='dark'/>

      <CollaboratorsProvider>
        <TasksProvider>
          <Stack initialRouteName="(tabs)">
            <Stack.Screen name="welcome" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </TasksProvider>
      </CollaboratorsProvider>
    </View>
  );
}
