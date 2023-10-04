import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";

import { colors } from "./theme";

export const Background = styled.View`
  background-color: ${colors.lighter};
  flex: 1;
`;

export const Wrapper = styled.View`
  padding: 0 ${RFValue(24)}px;
  flex: 1;
`;