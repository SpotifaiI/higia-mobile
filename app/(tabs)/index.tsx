import { Text, View, ScrollView } from "react-native";
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
  ContainBar,
  DaysTable,
  DayOne,
  DayTwo,
  DayThree,
  DayFour,
  DayFive,
  PlaceBox,
  ValuePlace,
  LabelPlace,
  WeekBox
} from "./styles";
import { GradientMain } from "../../components/GradientMain";

export default function Home() {
  return (
    <ScrollView>
      <Container>
        <Title>Bom dia, João!</Title>
        <BarProgress>
          <Subtitle>Meta Diária</Subtitle>
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
            </DayOne>
            <DayTwo>
              <PlaceBox>
                <GradientMain>
                  <ValuePlace>15</ValuePlace>
                  <LabelPlace>Lugares</LabelPlace>
                </GradientMain>
              </PlaceBox>
            </DayTwo>
            <DayThree>
              <PlaceBox>
                <GradientMain>
                  <ValuePlace>16</ValuePlace>
                  <LabelPlace>Lugares</LabelPlace>
                </GradientMain>
              </PlaceBox>
            </DayThree>
            <DayFour>
              <PlaceBox>
                <GradientMain>
                  <ValuePlace>17</ValuePlace>
                  <LabelPlace>Lugares</LabelPlace>
                </GradientMain>
              </PlaceBox>
            </DayFour>
          </DaysTable>
        </WeekBox>

        <Footer></Footer>
      </Container>
    </ScrollView>
  );
}
