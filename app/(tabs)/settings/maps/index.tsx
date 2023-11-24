import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { Switch, View } from 'react-native';

import { AppearanceButton } from '../../../../components/AppearanceButton';
import { colors } from '../../../../global/styles/theme';

import {
  Container,
  TaksMap,
  TasksText,
} from './styles';

export function SettingsMap() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Container>
      <Stack.Screen options={{ title: "Mapas" }} />

      <AppearanceButton onHandler={()=>{}}></AppearanceButton>

      <TaksMap>
        <TasksText>Mostrar tarefas concluídas</TasksText>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: isEnabled ? colors.light : colors.light,
              borderRadius: 25,
              paddingRight: 13,
              paddingLeft: 10,
              paddingBottom: 50,
              paddingTop: 0,
              height: 40,
            }}
          >
            <Switch
              trackColor={{ false: "transparent", true: "transparent" }}
              thumbColor={isEnabled ? colors.main1 : colors.main1Light}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{ transform: [{ scale: 1.3 }] }}
            />
          </View>
        </View>
      </TaksMap>
    </Container>
  );
};
