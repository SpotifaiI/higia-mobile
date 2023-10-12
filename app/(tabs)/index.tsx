import { Text, View } from "react-native";
import { useEffect, useMemo, useState } from "react";
import {
  Container,
  ContentContainer,
  Description,
  Footer,
  Phrase,
  TextWrapper,
  Title,
  StyledProgressBar
} from './styles';


export default function Home() {
  return (
    <Container>
      <Title>Bom dia, João!</Title>
      <View>
        <StyledProgressBar progress={0.5} width={200} height={20} />
      </View>

      <ContentContainer>
        <TextWrapper>
          <Phrase>Hello, World!</Phrase>
          <Description>Show de boletas</Description>
        </TextWrapper>
      </ContentContainer>

      <Footer>
      </Footer>
    </Container>
  );
}