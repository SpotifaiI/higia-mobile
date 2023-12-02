import { useRouter } from 'expo-router';
import { useContext, useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CollaboratorsAPI } from '../../api/collaborators/collaborators';
import { GradientButton } from '../../components/GradientButton';
import { InputLabel } from '../../components/InputLabel';
import { InputText } from '../../components/InputText';
import { CollaboratorsContext } from '../../contexts/CollaboratorsContext';
import {
  ButtonsContainer,
  Description,
  FormContainer,
  Header,
  Wrapper
} from './styles';

export function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { updateCredentials } = useContext(CollaboratorsContext);
  const collaboratorsApi = new CollaboratorsAPI();

  async function onHandlerLoginButton() {
    const collaborator = await collaboratorsApi.collaboratorLogin(
      email, password
    );

    if (collaborator) {
      updateCredentials({
        birthday: collaborator.birthday,
        email: collaborator.email,
        id: collaborator.id,
        name: collaborator.name,
        phoneNumber: collaborator.phoneNumber,
        password: collaborator.password
      });
      router.replace('/(tabs)');
    } else {
      Alert.alert(
        'Login inválido!',
        'Login ou senha estão incorretos, tente novamente.',
        [{ text: 'Entendi' }]
      );
    }
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#F5F5F5", flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView style={{ flex: 1 }}>
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
                  value={email}
                />

                <InputLabel>Senha</InputLabel>
                <InputText
                  placeholder="Digite sua senha"
                  secureTextEntry={true}
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                />
              </FormContainer>

              <GradientButton label="Entrar" onHandler={onHandlerLoginButton} />
            </ButtonsContainer>
          </Wrapper>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}