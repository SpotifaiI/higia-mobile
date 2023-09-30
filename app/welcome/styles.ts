import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ButtonsContainer = styled.View`
  gap: ${RFValue(16)}px;
`;

export const Wrapper = styled.View`
  padding: ${RFValue(24)}px;
`;

export const Description = styled.Text`
    font-size: ${RFValue(32)}px;
    font-family: Poppins_100Thin;
    margin-top: ${RFValue(13.17)}px;
`;

export const Header =styled.View `
  align-items: center;
  justify-content: center;
  margin-bottom: ${RFValue(24)}px;
`;