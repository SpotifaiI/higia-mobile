import  styled  from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
    padding: ${RFValue(10)}px;
    background:  #F5F5F5;
`;

export const ContentHeader =styled.View `
    padding: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;

`;

export const ViewButton = styled.View`
    margin-top: ${RFValue(35)}px;
`;

export const ContentBody = styled.View`
    background:  #F5F5F5;
    padding: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
    margin-top: -20px;
`;

export const ContentFooter =styled.View `
    background:  #F5F5F5;
    padding: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(21)}px;
    margin-top: ${RFValue(60)}px;
    width: ${RFValue(310)}px;
    font-family: Poppins_700Bold;
    padding: ${RFValue(0)}px;
`;

export const Description = styled.Text`
    font-size: ${RFValue(32)}px;
    font-family: Poppins_100Thin;
    margin-top: ${RFValue(13.17)}px;
`;

export const HrLine = styled(RectButton)`
    border: 1px solid red;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: -25px;
`;