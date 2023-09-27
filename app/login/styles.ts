import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { colors } from "../../global/styles/theme";

export const Header =styled.View `
  align-items: center;
  justify-content: center;
  margin-bottom: ${RFValue(24)}px;
`;

export const Wrapper = styled.View`
  padding: ${RFValue(24)}px;
`;

export const FormContainer = styled.View`
  gap: ${RFValue(8)}px;
`;

export const ButtonsContainer = styled.View`
  gap: ${RFValue(16)}px;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(20)}px;
    margin: ${RFValue(16)}px 0;
    font-family: 'Poppins_700Bold';
`;

export const Description = styled.Text`
    font-size: ${RFValue(32)}px;
    font-family: Poppins_100Thin;
    margin-top: ${RFValue(13.17)}px;
`;

export const SeparatorContainer = styled.View`
  margin: ${RFValue(24)}px 0;
  flex-direction: row;
  gap: ${RFValue(16)}px;
  align-items: center;
`;

export const SeparatorLine = styled.View`
  flex: 1;
  height: ${RFValue(1)}px;
  background-color: ${colors.dark};
`;

export const SeparatorText = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: ${RFValue(16)}px;
  color: ${colors.dark};
`;