import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { colors } from "../../global/styles/theme";


export const StreetBoxWrapper = styled.View`
  display: flex;
  padding: ${RFValue(10)}px;
  margin-top: ${RFValue(10)}px;
  margin-bottom: ${RFValue(10)}px;
  width: 100%;
  flex-direction: row;
  flex-direction: row-reverse;
  justify-content: space-between;
  background-color: ${colors.light};
  height: ${RFValue(120)}px;
  border-radius: 20px;
`;

export const LeftContent = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0 ${RFValue(5)}px;
  margin-right: auto;
  flex: 4;
`;

export const RightContent = styled.View`
  display: flex;
  align-items: left;
  flex: 6;
  padding-left: ${RFValue(20)}px;
  justify-content: center;
  margin-left: auto;
  flex-direction: column;
`;

export const PausedIcon = styled.Text`
  font-weight: bold;
  opacity: 0.5;
  border: 1px solid purple;
`;

export const PlayIcon = styled.Text`
  font-weight: bold;
  border: 1px solid yellow;
`;

export const Time = styled.Text`
  opacity: 0.5;
  color: 1px solid pink;
`;

export const StreetName = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(18)}px;
  text-transform: capitalize;
`;

export const DistanceLabel = styled.Text`
  opacity: 0.5;
  font-size: ${RFValue(16)}px;
  font-family: "Poppins_500Medium";
`;
