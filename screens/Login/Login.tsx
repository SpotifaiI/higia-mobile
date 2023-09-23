import React from 'react';
import { Text, Image, Button, TextInput, Pressable, ScrollView, View} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { BtnGoogle } from "../../components/SocialButtons/BtnGoogle";
import { BtnFacebook } from "../../components/SocialButtons/BtnFacebook";

import {
  Container,
  ContentHeader,
  Title,
  Description,
  ViewButton,
  ContentBody,
  ContentFooter,
  HrLine
} from './styles'

const Login: React.FC = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#F5F5F5' }}>
      <ScrollView>
      <Container>
        <ContentHeader>
          <Image style={{
            resizeMode: 'cover',
            height: 119.828,
            width: 160,
          }} source={require('../../assets/favicon.png')} />
          <Description>HIGIA</Description>
          <Title>Faça login para começar!</Title>
        </ContentHeader>


        <ContentBody>
        <ViewButton>
            <Text  style={{color:'#787D82', fontSize: 16, fontFamily: 'Poppins_700Bold', marginLeft: 3}}>E-mail</Text>
            <TextInput
              placeholder="Digite seu email"
              keyboardType="email-address"
              autoCapitalize="none"
              style={{borderRadius:16, width: 325, height: 78, backgroundColor:'#FBFBFB', fontFamily: 'Poppins_400Regular', paddingLeft: 22 }}
            />

            <Text style={{color:'#787D82', fontSize: 16, fontFamily: 'Poppins_700Bold', marginTop: 7, marginLeft: 3}}>Senha</Text>
            <TextInput
              placeholder="Digite sua senha"
              secureTextEntry={true}
              style={{borderRadius:16, width: 325, height: 78, backgroundColor:'#FBFBFB', fontFamily: 'Poppins_400Regular', paddingLeft: 22 }}
            />

            <Pressable style={{borderRadius:16, width: 325, height: 78, backgroundColor:'#59e382', alignItems: 'center', justifyContent: 'center', marginTop: 28}}>
              <Text style={{fontSize: 20, color: '#F5F5F5', fontFamily:'Poppins_700Bold'}}>Entrar</Text>              
            </Pressable>
          </ViewButton>
        </ContentBody>


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

export { Login };
