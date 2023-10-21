import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import ProgressBar from "react-native-progress/Bar";
import { LinearGradient } from "expo-linear-gradient";
import { colors, gradients } from "../../global/styles/theme";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: ${RFValue(25)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  line-height: ${RFValue(48)}px;
  font-family: "Poppins_700Bold";
  color: ${colors.darker};
  text-align: left;
`;

export const ProgressContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.darker};
  margin-top: ${RFValue(25)}px;
`;

export const BarProgress = styled.View`
  display: flex;
  align-items: left;
  justify-content: center;
  color: ${colors.darker};
  margin-top: ${RFValue(25)}px;
`;

export const ContainBar = styled.View`
  align-items: center;
`;

export const Phrase = styled.Text`
  font-size: ${RFValue(22)}px;
  line-height: ${RFValue(32)}px;
  font-family: "Poppins_700Bold";
  color: ${colors.darker};
  width: 100%;
  text-align: left;
`;

export const Description = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(24)}px;
  font-family: "Poppins_500Medium";
  color: ${colors.dark};
  width: 100%;
  text-align: center;
`;

export const TextWrapper = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Footer = styled.View`
  gap: ${RFValue(5)}px;
`;

export const StyledProgressBar = styled(ProgressBar)`
  color: ${gradients.main};
  border-radius: 100px;
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(22)}px;
  margin-bottom: ${RFValue(10)}px;
  margin-top: ${RFValue(15)}px;
  font-family: "Poppins_700Bold";
  color: ${colors.darker};
  text-align: left;
  margin-left: ${RFValue(0)}px;
`;

export const DaysLasts = styled.Text`
  font-size: ${RFValue(11)}px;
  margin-top: ${RFValue(6)}px;
  font-family: "Poppins_500Medium";
  color: ${colors.dark};
  text-align: left;
  margin-left: ${RFValue(0)}px;
`;

export const Value = styled.Text`
  font-size: ${RFValue(40)}px;
  font-family: "Poppins_700Bold";
`;

export const Label = styled.Text`
  font-family: "Poppins_700Bold";
  font-size: ${RFValue(15)}px;
`;

export const Average = styled.View`
  align-items: center;
  height: ${RFValue(70)}px;
`;

export const Actual = styled.View`
  align-items: center;
  height: ${RFValue(70)}px;
`;

export const Goal = styled.View`
  align-items: center;
  height: ${RFValue(70)}px;
`;
