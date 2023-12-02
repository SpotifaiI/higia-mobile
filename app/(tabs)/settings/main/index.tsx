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
          <SettingsOptionButton label="Mapa" onPress={() => {
            router.push('/settings/maps');
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
