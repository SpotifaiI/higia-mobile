import { Text, View } from "react-native";
import { useEffect, useMemo, useState } from "react";
import {
  Container,
  ProgressContainer,
  Description,
  Footer,
  Phrase,
  TextWrapper,
  Title,
  StyledProgressBar,
  BarProgress,
  Subtitle,
  DaysLasts
} from './styles';
import { GradientValue } from "../../components/GradientValue";

export default function Home() {
  return (
    <Container>
      <Title>Bom dia, João!</Title>
      <BarProgress>
        <Subtitle>Meta Diária</Subtitle>
        <StyledProgressBar progress={0.5} width={355} height={20}/>
        <DaysLasts>Faltam 5 lugares para alcançar o seu objetivo!</DaysLasts>
      </BarProgress>

      <ProgressContainer>
          <Phrase>Progresso</Phrase>
          <TextWrapper>
            
          </TextWrapper>
      </ProgressContainer>

      <Footer>
      </Footer>
    </Container>
  );
}