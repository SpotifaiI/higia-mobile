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
  DaysLasts,
  Average,
  Actual,
  Goal,
  Value,
  Label,
  ContainBar
} from './styles';
import { GradientValue } from "../../components/GradientValue";

export default function Home() {
  return (
    <Container>
      <Title>Bom dia, João!</Title>
      <BarProgress>
        <Subtitle>Meta Diária</Subtitle>
        <ContainBar>
          <StyledProgressBar progress={0.5} width={341} height={20}/>
        </ContainBar>
        <DaysLasts>Faltam 5 lugares para alcançar o seu objetivo!</DaysLasts>
      </BarProgress>

      <ProgressContainer>
          <Phrase>Progresso</Phrase>
          <TextWrapper>
            <Average>
              <Value>25.0</Value>
              <Label>Média</Label>
            </Average>
            <Actual>
              <Value>45</Value>
              <Label>Atual</Label>
            </Actual>
            <Goal>
              <Value>50</Value>
              <Label>Objetivo</Label>
            </Goal>
          </TextWrapper>
      </ProgressContainer>

      <Footer>
      </Footer>
    </Container>
  );
}