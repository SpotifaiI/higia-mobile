import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { colors } from "../../../global/styles/theme";

export const MenuBar = styled.View`
  color: ${colors.darker};
`;

export const MenuPage = styled.View`
  display: flex;
  overflow: hidden;
  border-radius: ${RFValue(8)}px;
  margin-top: ${RFValue(50)}px;
  background-color: ${colors.lighter};
  elevation: 20;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 0 ${RFValue(16)}px;
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
  font-family: "Poppins_200ExtraLight";
  font-size: ${RFValue(30)}px;
  color: ${colors.darker};
  margin-left: ${RFValue(8)}px;
  margin-top: ${RFValue(8)}px;
`;
