import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { TasksAPI } from "../../api/tasks/tasks";
import { StreetBox } from "../../components/ActiveTasks";
import { CollaboratorsContext } from "../../contexts/CollaboratorsContext";
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
import { Task } from "../../api/tasks/tasks.model";

export default function Home() {
  const router = useRouter();
  const { isLoggedIn, name } = useContext(CollaboratorsContext);
  const [tasks, setTasks] = useState<Task[]>([]); // Inicialize o estado tasks

  useEffect(() => {
    setTimeout(() => {
      if (!isLoggedIn()) {
        router.replace("/welcome");
      }
    }, 200);
  }, [isLoggedIn, router]);

  const tasksAPI = new TasksAPI();

  useEffect(() => {
    // Função assíncrona para obter as tarefas do servidor
    const fetchTasks = async () => {
      try {
        const tasksFromAPI = await tasksAPI.getTasks();
        setTasks(tasksFromAPI); // Atualize o estado com as tarefas obtidas
      } catch (error) {
        console.error("Erro ao obter tarefas:", error);
      }
    };

    fetchTasks(); // Chame a função para buscar as tarefas ao carregar o componente

    // ...
  }, [tasksAPI]);

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

        <TaksContainer>
          <Phrase>Tarefas</Phrase>

          {tasks.map((task) => (
            <StreetBox
              key={task.id}
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
