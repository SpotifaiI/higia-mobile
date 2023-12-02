import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import MapView, { LatLng } from 'react-native-maps';

import { TasksAPI } from '../../../api/tasks/tasks';
import { Task } from '../../../api/tasks/tasks.model';
import { TaskMapMarker, TaskStatus } from '../../../components/TaskMapMarker';
import {
  MapContainer,
  MapErrorContainer,
  MapInfoContainer,
  MapMessageText
} from './styles';

export function Tasks() {
  const [initialLocation, setInitialLocation] = useState<LatLng>({
    latitude: 0,
    longitude: 0
  });
  const [locationErrorMessage, setLocationErrorMessage] = useState('');
  const [isLoadingInitialLocation, setLoadingInitialLocation] = useState(true);
  const [pendingTasks, setPendingTasks] = useState<Task[]>([]);
  const [activeTasks, setActiveTasks] = useState<Task[]>([]);
  const [concludedTasks, setConcludedTasks] = useState<Task[]>([]);

  const tasksApi = new TasksAPI();
  let tasksCounter = 0;

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocationErrorMessage('É necessário permitir a localização para o mapa funcionar corretamente.');
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      setInitialLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      });

      setLoadingInitialLocation(false);
    })();
  }, []);

  useEffect(() => {
    (
      async () => {
        const { active, concluded, pending } = await tasksApi.getOrderedTasks();

        setPendingTasks(pending);
        setActiveTasks(active);
        setConcludedTasks(concluded);
      }
    )();
  }, []);

  function TaskMapMarkerItem(key: number, status: TaskStatus, task: Task) {
    return (
      <TaskMapMarker
        key={key}
        title={task.description}
        description={task.observation}
        coordinate={{
          latitude: task.initialCoordinate.lat,
          longitude: task.initialCoordinate.lng
        }}
        status={status} />
    );
  }

  return (
    <MapContainer>
      <MapView region={{
        latitude: initialLocation.latitude,
        longitude: initialLocation.longitude,
        latitudeDelta: 0,
        longitudeDelta: 0
      }} style={{ flex: 1 }} zoomEnabled minZoomLevel={10}>
        {
          pendingTasks.map(task => {
            return TaskMapMarkerItem(tasksCounter++, 'pending', task);
          })
        }

        {
          activeTasks.map(task => {
            return TaskMapMarkerItem(tasksCounter++, 'progress', task);
          })
        }

        {
          concludedTasks.map(task => {
            return TaskMapMarkerItem(tasksCounter++, 'finished', task);
          })
        }
      </MapView>

      {
        (isLoadingInitialLocation && !locationErrorMessage)
        ? (
          <MapInfoContainer>
            <MapMessageText>
              Carregando localização inicial...
            </MapMessageText>
          </MapInfoContainer>
        )
        : null
      }

      {(locationErrorMessage)
        ? (
          <MapErrorContainer>
            <MapMessageText>
              {locationErrorMessage}
            </MapMessageText>
          </MapErrorContainer>
        )
        : null}
    </MapContainer>
  );
}