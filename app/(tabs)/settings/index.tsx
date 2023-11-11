import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


import {
  Container,
  MenuBar,
  MenuButtons,
  MenuPage,
  MenuButtonText,
  MenuButtonMap,
  ImgContainer,
  HigiaIcon,
  Description,
  MenuButtonDescription,
} from "./styles";

import { AntDesign } from "@expo/vector-icons";

export const SettingsMainScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <MenuPage>
        <MenuBar>
          <TouchableOpacity
            style={MenuButtons}
            onPress={() => navigation.navigate("SettingsAppearance")}
          >
            <MenuButtonText>
              <MenuButtonDescription>Aparência</MenuButtonDescription>
              <AntDesign name="arrowright" size={18} color="black" />
            </MenuButtonText>
          </TouchableOpacity>
          <TouchableOpacity
            style={MenuButtonMap}
            onPress={() => navigation.navigate("SettingsMap")}
          >
            <MenuButtonText>
              <MenuButtonDescription>Mapa</MenuButtonDescription>
              <AntDesign name="arrowright" size={18} color="black" />
            </MenuButtonText>
          </TouchableOpacity>
          <TouchableOpacity
            style={MenuButtons}
            onPress={() => navigation.navigate("SettingsStatistics")}
          >
            <MenuButtonText>
              <MenuButtonDescription>Estatística</MenuButtonDescription>
              <AntDesign name="arrowright" size={18} color="black" />
            </MenuButtonText>
          </TouchableOpacity>
        </MenuBar>
      </MenuPage>
      <ImgContainer>
        <Image
          style={HigiaIcon}
          source={require("../../../assets/favicon.png")}
        />
        <Description>HIGIA</Description>
      </ImgContainer>
    </Container>
  );
};
