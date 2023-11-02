import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { colors } from '../../global/styles/theme';

export const TaskMapContainer = styled.View`
  align-items: center;
`;

export const TaskMapMarkerCore = styled.View`
  height: ${RFValue(64)}px;
  width: ${RFValue(64)}px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.main2Light};
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
  border-top-color: ${colors.main2Light};
  transform: translateY(-10px);
  z-index: 100;
`;