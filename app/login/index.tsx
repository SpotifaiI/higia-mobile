import axios from 'axios';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GradientButton } from '../../components/GradientButton';
import { InputLabel } from '../../components/InputLabel';
import { InputText } from '../../components/InputText';
import {
  ButtonsContainer,
  Description,
  FormContainer,
  Header,
  Wrapper
} from './styles';

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    (async () => {})();
  }, []);

  function onHandlerLoginButton() {
    axios
      .post("/api/collaborators", { email, password })
      .then((response) => {
        console.log(response.data);
        router.replace("/(tabs)/");
      })
      .catch((error) => {
        console.error("Erro ao fazer login:", error);
      });
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#F5F5F5" }}>
      <ScrollView>
        <Wrapper>
          <Header>
            <Image source={require("../../assets/favicon.png")} />

            <Description>HIGIA</Description>
          </Header>

          <ButtonsContainer>
            <FormContainer>
              <InputLabel>E-mail</InputLabel>
              <InputText
                placeholder="Digite seu email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
              />

              <InputLabel>Senha</InputLabel>
              <InputText
                placeholder="Digite sua senha"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
              />
            </FormContainer>

            <GradientButton label="Entrar" onHandler={onHandlerLoginButton} />
          </ButtonsContainer>
        </Wrapper>
      </ScrollView>
    </SafeAreaView>
  );
}