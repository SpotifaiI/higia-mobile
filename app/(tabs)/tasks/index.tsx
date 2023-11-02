import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import MapView, { LatLng } from 'react-native-maps';

import { TaskMapMarker } from '../../../components/TaskMapMarker';
import {
  MapContainer,
  MapErrorContainer,
  MapErrorMessage
} from './styles';

export function Tasks() {
  const [initialLocation, setInitialLocation] = useState<LatLng>({
    latitude: 0,
    longitude: 0
  });
  const [locationErrorMessage, setLocationErrorMessage] = useState('');

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
    })();
  }, []);

  return (
    <MapContainer>
      <MapView region={{
        latitude: initialLocation.latitude,
        longitude: initialLocation.longitude,
        latitudeDelta: 0,
        longitudeDelta: 0
      }} style={{ flex: 1 }} zoomEnabled>
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

      {(locationErrorMessage)
        ? (
          <MapErrorContainer>
            <MapErrorMessage>
              {locationErrorMessage}
            </MapErrorMessage>
          </MapErrorContainer>
        )
        : null}
    </MapContainer>
  );
}