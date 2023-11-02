import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { colors } from '../../../global/styles/theme';

export const MapContainer = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const MapErrorContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: ${RFValue(16)}px;
  border-radius: ${RFValue(16)}px;
  background-color: ${colors.danger};
  color: ${colors.white};
  flex-direction: row;
  align-items: center;
  gap: ${RFValue(16)}px;
  padding: ${RFValue(8)}px ${RFValue(16)}px;
`;

export const MapErrorMessage = styled.Text`
  color: ${colors.white};
  flex: 1;
  font-size: ${RFValue(16)}px;
  font-family: "Poppins_400Regular";
  line-height: ${RFValue(32)}px;
`;