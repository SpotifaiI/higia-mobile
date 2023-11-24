import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "../../../../global/styles/theme";



export const Container = styled.View`
  padding: ${RFValue(16)}px;
  display: flex;
`;

export const TaksMap = styled.View`
  background-color: ${colors.lighter};
  border-radius: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
  margin-top: 20px;
  padding: 7px 15px 7px 25px;
  width: 100%;
`;

export const TasksText = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: Poppins_400Regular;
  color: ${colors.black};
`;