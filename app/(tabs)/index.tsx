import { ScrollView } from "react-native";
import { GradientMain } from "../../components/GradientMain";
import { StreetBox } from "../../components/ActiveTasks";
import {
  Actual,
  Average,
  BarProgress,
  ContainBar,
  Container,
  CurrentDay,
  DayFour,
  DayOne,
  DayThree,
  DayTwo,
  DaysLasts,
  DaysTable,
  Description,
  Goal,
  Label,
  LabelPlace,
  Phrase,
  PlaceBox,
  ProgressContainer,
  StyledProgressBar,
  TaksContainer,
  TextWrapper,
  Title,
  Value,
  ValuePlace,
  WeekBox,
} from "./styles";

export default function Home() {
  return (
    <ScrollView>
      <Container>
        <Title>Bom dia, João!</Title>

        <BarProgress>
          <Phrase>Meta Diária</Phrase>
          <ContainBar>
            <StyledProgressBar>
              <GradientMain />
            </StyledProgressBar>
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
          <Phrase>Tarefas</Phrase>
          <StreetBox
            streetName={"Avenida JK"}
            distance={"10"}
            isPaused={false}
          />
        </TaksContainer>
      </Container>
    </ScrollView>
  );
}
