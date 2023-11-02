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

export const TaskMapContainer = styled.View`
  align-items: center;
`;

export const TaskMapMarker = styled.View`
  height: ${RFValue(64)}px;
  width: ${RFValue(64)}px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.main1};
  border-radius: ${RFValue(32)}px;
  z-index: 101;
`;

export const TaskMapMarkerPointer = styled.View`
  width: 0;
  height: 0;
  border-left-width: ${RFValue(24)}px;
  border-right-width: ${RFValue(24)}px;
  border-top-width: ${RFValue(48)}px;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: ${colors.main1};
  transform: translateY(-10px);
  z-index: 100;
`;