import React from 'react';
import { Image } from 'react-native';

import { SettingsOptionButton } from '../../../components/SettingsOptionButton';

import {
  Container,
  Description,
  HigiaIcon,
  ImgContainer,
  MenuBar,
  MenuPage
} from './styles';


export const SettingsMainScreen: React.FC = () => {
  return (
    <Container>
      <MenuPage>
        <MenuBar>
          <SettingsOptionButton label="Aparência" />
          <SettingsOptionButton label="Mapa" />
          <SettingsOptionButton label="Estatística" />
        </MenuBar>
      </MenuPage>
      <ImgContainer>
        <Image
          style={HigiaIcon}
          source={require("../../../assets/favicon.png")}
        />
        <Description>HIGIA</Description>
      </ImgContainer>
    </Container>
  );
};
