import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import MapView, { LatLng } from 'react-native-maps';

import { TaskMapMarker } from '../../../components/TaskMapMarker';
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

  return (
    <MapContainer>
      <MapView region={{
        latitude: initialLocation.latitude,
        longitude: initialLocation.longitude,
        latitudeDelta: 0,
        longitudeDelta: 0
      }} style={{ flex: 1 }} zoomEnabled minZoomLevel={10}>
        <TaskMapMarker
          key={0}
          title="Avenida JK"
          description="Cruzamento da JK com a Rua 9 de Março"
          coordinate={initialLocation}
          status="pending" />

        <TaskMapMarker
          key={1}
          title="Avenida JK"
          description="Cruzamento da JK com a Rua 9 de Março"
          coordinate={{
            latitude: initialLocation.latitude + 0.0004343,
            longitude: initialLocation.longitude + 0.0054543
          }}
          status="progress" />

        <TaskMapMarker
          key={2}
          title="Avenida JK"
          description="Cruzamento da JK com a Rua 9 de Março"
          coordinate={{
            latitude: initialLocation.latitude - 0.0004343,
            longitude: initialLocation.longitude - 0.0054543
          }}
          status="finished" />
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