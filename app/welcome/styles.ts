import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { colors } from "../../global/styles/theme";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: ${RFValue(16)}px 0;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  line-height: ${RFValue(48)}px;
  font-family: 'Poppins_400Regular';
  color: ${colors.main2};
  text-align: center;
`;

export const Hero = styled.Image`
  width: 80%;
`;

export const ContentContainer = styled.View``;

export const Phrase = styled.Text``;

export const Description = styled.Text``;