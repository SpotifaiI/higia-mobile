import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";

import { colors } from "./theme";

export const Background = styled.View`
  background-color: ${colors.lighter};
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.View`
  padding: 0 ${RFValue(16)}px;
  width: 100%;
  height: 100%;
`;