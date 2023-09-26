import {
  Image,
  ScrollView,
  Text,
  View
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import styled from "styled-components/native";
import {RFValue} from "react-native-responsive-fontsize";
import {RectButton} from "react-native-gesture-handler";

import {BtnGoogle} from "../components/SocialButtons/BtnGoogle";
import {BtnFacebook} from "../components/SocialButtons/BtnFacebook";
import ActionButton from "../components/atoms/ActionButton";
import InputLabel from "../components/atoms/InputLabel";
import InputText from "../components/atoms/TextInput";
import TextField from "../components/molecules/TextField";

export const Container = styled.View`
    padding: ${RFValue(10)}px;
    background:  #F5F5F5;
`;

export const ContentHeader =styled.View `
    padding: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;

`;

export const FormContainer = styled.View`
  gap: ${RFValue(8)}px;
  margin: ${RFValue(8)}px auto ${RFValue(16)}px auto;
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

export default function Login() {
  return (
    <SafeAreaView style={{ backgroundColor: '#F5F5F5' }}>
      <ScrollView>
        <Container>
          <ContentHeader>
            <Image style={{
              resizeMode: 'cover',
              height: 119.828,
              width: 160,
            }} source={require('../assets/favicon.png')} />
            <Description>HIGIA</Description>
            <Title>Faça login para começar!</Title>
          </ContentHeader>


          <FormContainer>
            <TextField
              inputLabel={{
                label: 'E-mail'
              }}
              inputText={{
                placeholder: 'Digite seu email',
                keyboardType: 'email-address',
                autoCapitalize: 'none'
              }}
            />

            <TextField
              inputLabel={{
                label: 'Senha'
              }}
              inputText={{
                placeholder: 'Digite sua senha',
                secureTextEntry: true
              }}
            />

            <ActionButton label="Entrar" />
          </FormContainer>


          <ContentFooter>
            <HrLine>
              <View
                style={{
                  width: 100,
                  left: 100,
                  height: 2,
                  top: 13,
                  backgroundColor: '#787d82',
                  position: 'absolute'
                }}/>
              <Text style={{fontFamily: 'Poppins_700Bold', color: '#787d82'}}>ou</Text>
              <View
                style={{
                  width: 100,
                  right: 100,
                  height: 2,
                  backgroundColor: '#787d82',
                  marginTop: -7
                }}/>
            </HrLine>
            <BtnGoogle></BtnGoogle>
            <BtnFacebook></BtnFacebook>
          </ContentFooter>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}