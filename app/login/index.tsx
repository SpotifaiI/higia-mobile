import {
  Image,
  ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import axios from "axios";

import { router } from "expo-router";
import { GradientButton } from "../../components/GradientButton";
import { IconButton } from "../../components/IconButton";
import { InputLabel } from "../../components/InputLabel";
import { InputText } from "../../components/InputText";
import { buttonIcons } from "../../global/assets/icons";
import {
  ButtonsContainer,
  Description,
  FormContainer,
  Header,
  SeparatorContainer,
  SeparatorLine,
  SeparatorText,
  Wrapper
} from "./styles";

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

  function onHandlerGoogleButton() {}

  function onHandlerFacebookButton() {}

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

          <SeparatorContainer>
            <SeparatorLine />
            <SeparatorText>ou</SeparatorText>
            <SeparatorLine />
          </SeparatorContainer>

          <ButtonsContainer>
            <IconButton
              label="Entrar com Google"
              onHandler={onHandlerGoogleButton}
              iconSource={buttonIcons.google}
            />
            <IconButton
              label="Entrar com Facebook"
              onHandler={onHandlerFacebookButton}
              iconSource={buttonIcons.facebook}
            />
          </ButtonsContainer>
        </Wrapper>
      </ScrollView>
    </SafeAreaView>
  );
}