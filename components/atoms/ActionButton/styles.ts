import styled from 'styled-components/native';
import {RFValue} from "react-native-responsive-fontsize";
import {LinearGradient} from "expo-linear-gradient";

import { colors } from '../../../utils/styles/theme';

export const Button = styled.TouchableOpacity`
  height: ${RFValue(72)}px;
  width: ${RFValue(320)}px;
  border-radius: ${RFValue(16)}px;
  overflow: hidden;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${colors.lighter};
  font-family: 'Poppins_700Bold';
`;

export const Gradient = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;