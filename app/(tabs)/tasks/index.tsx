import * as Location from 'expo-location';
import { useContext, useEffect, useState } from 'react';
import MapView, { LatLng } from 'react-native-maps';

import { Task } from '../../../api/tasks/tasks.model';
import { TaskMapMarker, TaskStatus } from '../../../components/TaskMapMarker';
import { TasksContext } from '../../../contexts/TasksContext';
import {
  MapContainer,
  MapErrorContainer,
  MapInfoContainer,
  MapMessageText
} from './styles';

export function Tasks() {
  const { orderedTasks: { active, pending, concluded } } = useContext(TasksContext);
  const [initialLocation, setInitialLocation] = useState<LatLng>({
    latitude: 0,
    longitude: 0
  });
  const [locationErrorMessage, setLocationErrorMessage] = useState('');
  const [isLoadingInitialLocation, setLoadingInitialLocation] = useState(true);

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
          pending.map(task => {
            return TaskMapMarkerItem(tasksCounter++, 'pending', task);
          })
        }

        {
          active.map(task => {
            return TaskMapMarkerItem(tasksCounter++, 'progress', task);
          })
        }

        {
          concluded.map(task => {
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