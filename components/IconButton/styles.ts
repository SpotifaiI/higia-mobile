import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { sizes } from "../../global/styles/sizes";
import { colors } from "../../global/styles/theme";
import { Label } from "../ButtonText/styles";

export const Button = styled.TouchableOpacity`
  height: ${RFValue(sizes.buttons.height)}px;
  border-radius: ${RFValue(sizes.buttons.radius)}px;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: ${RFValue(8)}px;
`;

export const Icon = styled.Image`
  height: ${RFValue(24)}px;
  width: ${RFValue(24)}px;
`;

export const ButtonText = styled(Label)`
  color: ${colors.darker};
`;