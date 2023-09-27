import { RFValue } from "react-native-responsive-fontsize";
import styled from 'styled-components/native';

import { colors } from "../../global/styles/theme";

export const Input = styled.TextInput`
  border-radius: ${RFValue(16)}px;
  height: ${RFValue(72)}px;
  background-color: ${colors.white};
  font-family: 'Poppins_400Regular';
  padding: ${RFValue(16)}px ${RFValue(24)}px;
`;