import { Feather } from '@expo/vector-icons';
import { MapMarkerProps, Marker } from 'react-native-maps';

import { colors } from '../../global/styles/theme';
import {
  TaskMapContainer,
  TaskMapMarkerCore,
  TaskMapMarkerPointer
} from './styles';

export type TaskStatus = 'pending'|'progress'|'finished';

export type TaskMapMarkerProps = {
  status: TaskStatus;
} & MapMarkerProps;

export function TaskMapMarker({
  status,
  coordinate,
  title,
  description,
  ...rest
}: TaskMapMarkerProps) {
  const taskInfo = {
    pending: {
      iconName: 'clock',
      color: colors.main2Light
    },
    progress: {
      iconName: 'zap',
      color: colors.main1Light
    },
    finished: {
      iconName: 'check-circle',
      color: colors.main1
    }
  };

  const markerColor = taskInfo[status].color;
  const markerIconName =
    taskInfo[status].iconName as keyof typeof Feather.glyphMap;

  return (
    <Marker
      title={title}
      description={description}
      coordinate={coordinate}
      {...rest}>
      <TaskMapContainer>
        <TaskMapMarkerCore style={{ backgroundColor: markerColor}}>
          <Feather
            size={56}
            color={colors.white}
            name={markerIconName} />
        </TaskMapMarkerCore>
        <TaskMapMarkerPointer style={{ borderTopColor: markerColor}} />
      </TaskMapContainer>
    </Marker>
  );
}