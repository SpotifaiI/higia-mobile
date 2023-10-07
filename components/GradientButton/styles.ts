import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import styled from 'styled-components/native';

import { sizes } from "../../global/styles/sizes";
import { colors } from '../../global/styles/theme';
import { Label } from "../ButtonText/styles";

export const Button = styled.TouchableOpacity`
  height: ${RFValue(sizes.buttons.height)}px;
  border-radius: ${RFValue(sizes.buttons.radius)}px;
  overflow: hidden;
`;

export const ButtonText = styled(Label)`
  color: ${colors.lighter};
`;