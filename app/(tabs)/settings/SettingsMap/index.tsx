import { View, Text, Switch, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../../../../global/styles/theme";
import {
  TaksMap,
  Container,
  TasksText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AppearanceButton } from "../../../../components/AppearanceButton";

export const SettingsMap: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const navigation = useNavigation();

  return (
    <Container>
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
