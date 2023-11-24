import { Stack } from 'expo-router';

import { colors } from '../../../global/styles/theme';

export default function SettingsLayout() {
  return (
    <Stack
      initialRouteName="main"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.main2
        },
        headerTitleStyle: {
          color: colors.lighter,
        },
        headerTintColor: colors.lighter,
        headerTitleAlign: "center",
        headerBackButtonMenuEnabled: true
      }}
    >
      <Stack.Screen name="main" options={{ title: "Configurações", headerShown: false }} />
      <Stack.Screen name="appearance" options={{ title: "Aparência" }} />
      <Stack.Screen name="maps" options={{ title: "Mapas" }} />
      <Stack.Screen name="statistics" options={{ title: "Estatísticas" }} />
    </Stack>
  );
}