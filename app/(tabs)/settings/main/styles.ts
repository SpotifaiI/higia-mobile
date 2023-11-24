import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { colors } from '../../../../global/styles/theme';

export const MenuBar = styled.View`
  color: ${colors.darker};
`;

export const MenuPage = styled.View`
  display: flex;
  overflow: hidden;
  border-radius: ${RFValue(8)}px;
  background-color: ${colors.lighter};
`;

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  padding: ${RFValue(48)}px ${RFValue(16)}px ${RFValue(32)}px ${RFValue(16)}px;
  justify-content: space-between;
`;

export const ImgContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: ${RFValue(32)}px;
`;

export const HigiaIcon = styled.Image`
  width: ${RFValue(72)}px;
  height: ${RFValue(64)}px;
`;

export const Description = styled.Text`
  font-family: "Poppins_200ExtraLight";
  font-size: ${RFValue(30)}px;
  color: ${colors.darker};
  margin-left: ${RFValue(8)}px;
  margin-top: ${RFValue(8)}px;
`;
