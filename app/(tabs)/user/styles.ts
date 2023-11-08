import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { colors } from '../../../global/styles/theme';

export const ProfileContainer = styled.View`
  width: 100%;
  height: 100%;
`;

export const ProfileHeader = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: ${RFValue(16)}px;
`;

export const ProfileAvatar = styled.View`
  width: ${RFValue(160)}px;
  height: ${RFValue(160)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(80)}px;
  overflow: hidden;
`;

export const ProfileName = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: ${RFValue(32)}px;
  line-height: ${RFValue(48)}px;
`;

export const ProfileBody = styled.View`
  border-radius: ${RFValue(16)}px;
  overflow: hidden;
  margin: ${RFValue(24)}px 0;
`;

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