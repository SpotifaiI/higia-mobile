import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

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

export const ProfileBody = styled.View``;

export const ProfileDetailsContainer = styled.View``;

export const ProfileDetailsLabel = styled.Text``;

export const ProfileDetailsData = styled.Text``;