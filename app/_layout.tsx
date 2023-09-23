import {useCallback} from 'react';
import {View} from "react-native";
import {StatusBar} from 'expo-status-bar';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import {Slot} from "expo-router";

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
    <View onLayout={onLayoutRootBuilt}>
      <StatusBar style='dark'/>

      <Slot />
    </View>
  );
}
