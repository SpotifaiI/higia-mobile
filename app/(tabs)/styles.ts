import MaskedView from "@react-native-masked-view/masked-view";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import ProgressBar from 'react-native-progress/Bar';

import { colors } from "../../global/styles/theme";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: ${RFValue(16)}px 0;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  line-height: ${RFValue(48)}px;
  font-family: 'Poppins_700Bold';
  color: ${colors.darker};
  text-align: left;
  margin-left: ${RFValue(25)}px;
`;

export const ContentContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Phrase = styled.Text`
  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(32)}px;
  font-family: 'Poppins_700Bold';
  color: ${colors.darker};
  width: 100%;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(24)}px;
  font-family: 'Poppins_500Medium';
  color: ${colors.dark};
  width: 100%;
  text-align: center;
`;

export const TextWrapper = styled.View`
  width: 90%;
  gap: ${RFValue(16)}px;
`;

export const Footer = styled.View`
  gap: ${RFValue(24)}px;
`;


export const StyledProgressBar = styled(ProgressBar)`
  color: ${colors.darker};
`;