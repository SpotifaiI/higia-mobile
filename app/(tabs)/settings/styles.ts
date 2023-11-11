import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { colors } from "../../../global/styles/theme";
import { AntDesign as AntDesignIcon } from "@expo/vector-icons";

export const MenuBar = styled.View`
  width: ${RFValue(270)}px;
  line-height: ${RFValue(48)}px;
  color: ${colors.darker};
`;

export const MenuButtons = {
  width: RFValue(275),
  height: RFValue(48),
  backgroundColor: colors.lighter,
  alignItems: "left",
  justifyContent: "center",
};

export const MenuButtonMap = {
  width: RFValue(275),
  height: RFValue(48),
  backgroundColor: colors.lighter,
  borderTopWidth: 3,
  borderTopColor: colors.light,
  borderBottomWidth: 3,
  borderBottomColor: colors.light,
  justifyContent: "center",
  alignItems: "left",
};

export const MenuButtonText = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px 0px 10px;
`;

export const MenuButtonDescription = styled.Text`
  font-family: "Poppins_700Bold";
  font-size: 15px;
`;

export const AntDesign = styled(AntDesignIcon)`
  margin-top: ${RFValue(10)}px;
`;

export const MenuPage = styled.View`
  display: flex;
  align-items: center;
  width: ${RFValue(270)}px;
  overflow: hidden;
  border-radius: 20px;
  margin-top: ${RFValue(50)}px;
  background-color: ${colors.lighter};
  elevation: 20;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: ${RFValue(10)}px;
  display: flex;
  align-items: center;
`;

export const ImgContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: ${RFValue(30)}px;
`;

export const HigiaIcon = {
  width: RFValue(70),
  height: RFValue(57),
  display: "flex",
};

export const Description = styled.Text`
  font-family: "Poppins_100Thin";
  font-size: ${RFValue(30)}px;
  color: ${colors.darker};
  margin-left: ${RFValue(8)}px;
  margin-top: ${RFValue(8)}px;
`;
