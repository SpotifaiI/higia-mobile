import { RFValue } from "react-native-responsive-fontsize";
import styled from 'styled-components/native';

import { colors } from "../../global/styles/theme";

export const LabelText = styled.Text`
  color: ${colors.dark};
  font-size: ${RFValue(16)}px;
  font-family: 'Poppins_700Bold';
`;