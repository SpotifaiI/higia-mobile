import { useRouter } from "expo-router";
import { useContext, useEffect } from "react";
import { ScrollView } from "react-native";
import { StreetBox } from "../../components/ActiveTasks";
import { CollaboratorsContext } from "../../contexts/CollaboratorsContext";
import { TasksContext } from "../../contexts/TasksContext";
import {
  Actual,
  Average,
  Container,
  Goal,
  Label,
  Phrase,
  ProgressContainer,
  TaksContainer,
  TextWrapper,
  Title,
  Value,
} from "./styles";

export default function Home() {
  const router = useRouter();
  const { isLoggedIn, name } = useContext(CollaboratorsContext);
  const {
    pendingTasksCount,
    activeTasksCount,
    concludedTasksCount,
    tasks
  } = useContext(TasksContext);

  useEffect(() => {
    setTimeout(() => {
      if (!isLoggedIn()) {
        router.replace("/welcome");
      }
    }, 200);
  }, [isLoggedIn, router]);

  function calculateDistance(coord1: string, coord2: string): string {
    const [lat1, lon1] = coord1.split(", ").map(parseFloat);
    const [lat2, lon2] = coord2.split(", ").map(parseFloat);

    const R = 6371; // aqui calcula o raio da terra em km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // aqui transforma a distancia em km

    return distance.toFixed(2);
  }

  return (
    <ScrollView>
      <Container>
        <Title>Bom dia, {name}!</Title>

        <ProgressContainer>
          <Phrase>Progresso</Phrase>
          <TextWrapper>
            <Average>
              <Value>{pendingTasksCount}</Value>
              <Label>Pendentes</Label>
            </Average>
            <Actual>
              <Value>{activeTasksCount}</Value>
              <Label>Ativas</Label>
            </Actual>
            <Goal>
              <Value>{concludedTasksCount}</Value>
              <Label>Concluídas</Label>
            </Goal>
          </TextWrapper>
        </ProgressContainer>

        <TaksContainer>
          <Phrase>Tarefas</Phrase>

          {tasks.map((task) => (
            <StreetBox
              key={task.id}
              taskId={task.id}
              streetName={task.description}
              distance={calculateDistance(
                `${task.initialCoordinate.lat}, ${task.initialCoordinate.lng}`,
                `${task.endCoordinate.lat}, ${task.endCoordinate.lng}`
              )}
              status={task.status}
            />
          ))}
        </TaksContainer>
      </Container>
    </ScrollView>
  );
}
