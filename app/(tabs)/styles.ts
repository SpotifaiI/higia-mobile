import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import ProgressBar from 'react-native-progress/Bar';
import { LinearGradient } from "expo-linear-gradient";
import { colors, gradients } from "../../global/styles/theme";

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

export const ProgressContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(-240)}px;
  color: ${colors.darker};
  margin-left: ${RFValue(0)}px;
`;

export const Phrase = styled.Text`
  font-size: ${RFValue(22)}px;
  line-height: ${RFValue(32)}px;
  font-family: 'Poppins_700Bold';
  color: ${colors.darker};
  margin-left: ${RFValue(49)}px;
  width: 100%;
  text-align: left;
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
  color: ${gradients.main};
  border-radius: 100px;
`;

export const BarProgress = styled.View`
  margin-top: ${RFValue(-300)}px;
  margin-left: ${RFValue(25)}px;
`;

export const Subtitle = styled.Text`
font-size: ${RFValue(22)}px;
margin-bottom: ${RFValue(10)}px;
margin-top: ${RFValue(15)}px;
font-family: 'Poppins_700Bold';
color: ${colors.darker};
text-align: left;
margin-left: ${RFValue(0)}px;
`;

export const DaysLasts = styled.Text`
font-size: ${RFValue(11)}px;
margin-top: ${RFValue(6)}px;
font-family: 'Poppins_500Medium';
color: ${colors.dark};
text-align: left;
margin-left: ${RFValue(0)}px;
`;
