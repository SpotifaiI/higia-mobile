import { useRouter } from 'expo-router';

import { SettingsOptionButton } from '../../../../components/SettingsOptionButton';

import {
  Container,
  Description,
  HigiaIcon,
  ImgContainer,
  MenuBar,
  MenuPage
} from './styles';

export function SettingsMainScreen() {
  const router = useRouter();

  return (
    <Container>
      <MenuPage style={{
          elevation: 20
        }}>
        <MenuBar>
          <SettingsOptionButton label="Aparência" onPress={() => {
            router.push('/settings/appearance');
          }} />
          <SettingsOptionButton label="Mapa" onPress={() => {
            router.push('/settings/maps');
          }} />
          <SettingsOptionButton label="Estatística" onPress={() => {
            router.push('/settings/statistics');
          }} />
        </MenuBar>
      </MenuPage>
      <ImgContainer>
        <HigiaIcon
          source={require("../../../../assets/favicon.png")}
        />
        <Description>HIGIA</Description>
      </ImgContainer>
    </Container>
  );
};
