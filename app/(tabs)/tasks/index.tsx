import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import MapView, { LatLng, Marker } from 'react-native-maps';

import { Feather } from '@expo/vector-icons';
import { colors } from '../../../global/styles/theme';
import {
  MapContainer,
  MapErrorContainer,
  MapErrorMessage,
  TaskMapContainer,
  TaskMapMarker,
  TaskMapMarkerPointer
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
        <Marker
          title="Avenida JK"
          description="Cruzamento da JK com a Rua 9 de Março"
          coordinate={initialLocation}>
          <TaskMapContainer>
            <TaskMapMarker>
              <Feather size={56} color={colors.white} name="clock" />
            </TaskMapMarker>
            <TaskMapMarkerPointer />
          </TaskMapContainer>
        </Marker>
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