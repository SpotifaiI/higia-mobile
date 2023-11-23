import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "../../global/styles/theme";


export const Button = styled.TouchableOpacity`
  background-color: ${colors.lighter};
  padding: ${RFValue(15)}px;
  border-radius: ${RFValue(15)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

export const MapButtonText = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 15px 0px 11px;
  width: 100%;
  justify-content: space-between;
`;

export const MapButtonDescription = styled.Text`
  font-family: "Poppins_700Bold";
  font-size: ${RFValue(15)}px;
  display: flex;
`;

export const AntDesignWrapper = styled.View``;
