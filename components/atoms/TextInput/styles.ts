import styled from 'styled-components/native';
import {RFValue} from "react-native-responsive-fontsize";

import {colors} from "../../../utils/styles/theme";

export const Input = styled.TextInput`
  border-radius: ${RFValue(16)}px;
  width: ${RFValue(320)}px;
  height: ${RFValue(72)}px;
  background-color: ${colors.white};
  font-family: 'Poppins_400Regular';
  padding: ${RFValue(16)}px ${RFValue(24)}px;
`;