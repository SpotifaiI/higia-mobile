import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import styled from 'styled-components/native';

import { colors } from '../../global/styles/theme';
import { Label } from "../ButtonText/styles";

export const Box = styled.TouchableOpacity`
  font-size: ${RFValue(28)}px;
  overflow: hidden;
`;

export const BoxText = styled(Label)`
  color: ${colors.lighter};
`;