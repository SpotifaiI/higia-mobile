import styled from 'styled-components/native';
import {RFValue} from "react-native-responsive-fontsize";

import {colors} from "../../../utils/styles/theme";

export const LabelText = styled.Text`
  color: ${colors.dark};
  font-size: ${RFValue(16)}px;
  font-family: 'Poppins_700Bold';
`;