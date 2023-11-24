import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { colors } from '../../global/styles/theme';

export const MenuButton = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(64)}px;
  padding: 0 ${RFValue(16)}px;
  background-color: ${colors.lighter};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MenuButtonText = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 15px 0px 10px;
  width: 100%;
  justify-content: space-between;
`;

export const MenuButtonDescription = styled.Text`
  font-family: "Poppins_700Bold";
  font-size: 15px;
  display: flex;
`;

export const MenuButtonIconWrapper = styled.View``;