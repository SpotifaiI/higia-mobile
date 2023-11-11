import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsMainScreen } from "./index";

import { SettingsAppearance } from "./SettingsAppearance/";
import { SettingsMap } from "./SettingsMap";
import { SettingsStatistics } from "./SettingsStatistics";

import { GradientMain } from "../../../components/GradientMain";
import { colors } from "../../../global/styles/theme";

const Stack = createNativeStackNavigator();

export default function SettingsLayout() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Settings"
        screenOptions={{
          headerBackground: () => <GradientMain />,
          headerTitleStyle: {
            color: colors.lighter,
            fontFamily: "Poppins_700Bold"
          },
          headerTintColor: colors.lighter, // Define a cor da seta de retorno
          headerTitleAlign: "center",
          headerBackTitleVisible: false, // Oculta o título de retorno padrão
        }}
      >
        <Stack.Screen
          name="SettingsMainScreen"
          component={SettingsMainScreen}
          options={{ title: "Configurações" }}
        />
        <Stack.Screen
          name="SettingsAppearance"
          component={SettingsAppearance}
          options={{ title: "Aparência" }}
        />
        <Stack.Screen
          name="SettingsMap"
          component={SettingsMap}
          options={{ title: "Mapa" }}
        />
        <Stack.Screen
          name="SettingsStatistics"
          component={SettingsStatistics}
          options={{ title: "Estatísticas" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}