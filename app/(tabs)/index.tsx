import { Text, View, ScrollView } from "react-native";
import { useEffect, useMemo, useState } from "react";
import {
  Container,
  ProgressContainer,
  Description,
  TaksContainer,
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
  ContainBar,
  DaysTable,
  DayOne,
  DayTwo,
  DayThree,
  DayFour,
  CurrentDay,
  PlaceBox,
  ValuePlace,
  LabelPlace,
  WeekBox,
} from "./styles";
import { GradientMain } from "../../components/GradientMain";

export default function Home() {
  return (
    <ScrollView>
      <Container>
        <Title>Bom dia, João!</Title>
        <BarProgress>
          <Phrase>Meta Diária</Phrase>
          <ContainBar>
            <StyledProgressBar progress={0.5} width={341} height={20} />
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

        <WeekBox>
          <Description>Sua semana está corrida hein...</Description>
          <DaysTable>
            <DayOne>
              <PlaceBox>
                <GradientMain>
                  <ValuePlace>10</ValuePlace>
                  <LabelPlace>Lugares</LabelPlace>
                </GradientMain>
              </PlaceBox>
              <CurrentDay>2/Out</CurrentDay>
            </DayOne>
            <DayTwo>
              <PlaceBox>
                <GradientMain>
                  <ValuePlace>15</ValuePlace>
                  <LabelPlace>Lugares</LabelPlace>
                </GradientMain>
              </PlaceBox>
              <CurrentDay>3/Out</CurrentDay>
            </DayTwo>
            <DayThree>
              <PlaceBox>
                <GradientMain>
                  <ValuePlace>16</ValuePlace>
                  <LabelPlace>Lugares</LabelPlace>
                </GradientMain>
              </PlaceBox>
              <CurrentDay>4/Out</CurrentDay>
            </DayThree>
            <DayFour>
              <PlaceBox>
                <GradientMain>
                  <ValuePlace>17</ValuePlace>
                  <LabelPlace>Lugares</LabelPlace>
                </GradientMain>
              </PlaceBox>
              <CurrentDay>5/Out</CurrentDay>
            </DayFour>
          </DaysTable>
        </WeekBox>

        <TaksContainer>

        </TaksContainer>
      </Container>
    </ScrollView>
  );
}
