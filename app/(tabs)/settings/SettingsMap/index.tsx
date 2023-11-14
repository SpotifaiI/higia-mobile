import { View, Text, Switch, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../../../../global/styles/theme";
import {
  TaksMap,
  Container,
  TasksText,
  SizeIcons,
  MapButtonDescription,
  AntDesignWrapper,
  MapButtonText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export const SettingsMap: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity
        style={SizeIcons}
        onPress={()=>{}}
      >
        <MapButtonText>
          <MapButtonDescription>Aparência</MapButtonDescription>
          <AntDesignWrapper>
            <AntDesign name="arrowright" size={18} color="black" />
          </AntDesignWrapper>
        </MapButtonText>
      </TouchableOpacity>
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
