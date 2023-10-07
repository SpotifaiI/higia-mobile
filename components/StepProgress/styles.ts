import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";

import { colors } from "../../global/styles/theme";

export const ProgressItem = styled.View`
  width: ${RFValue(16)}px;
  height: ${RFValue(16)}px;
  border-radius: ${RFValue(16)}px;
  background-color: ${colors.dark};
  overflow: hidden;
`;

export const ProgressBar = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${RFValue(16)}px;
`;