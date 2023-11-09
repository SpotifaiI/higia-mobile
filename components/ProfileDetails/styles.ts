import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { colors } from '../../global/styles/theme';

export const ProfileDetailsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${RFValue(64)}px;
  padding: 0 ${RFValue(20)}px;
  background-color: ${colors.white};
`;

export const ProfileDetailsLabel = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(24)}px;
`;

export const ProfileDetailsData = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(24)}px;
`;