import { Feather } from '@expo/vector-icons';
import React, { PropsWithChildren, useContext, useEffect, useState } from 'react';

import { taskStatus } from '../../api/tasks/tasks.constants';
import { TaskActions, TasksContext } from '../../contexts/TasksContext';
import { colors } from '../../global/styles/theme';
import {
  DistanceLabel,
  LeftContent,
  RightContent,
  StreetBoxWrapper,
  StreetName,
  Time,
} from './styles';

export type StreetBoxProps = PropsWithChildren<{
  streetName: string;
  distance: string;
  status: string;
  taskId: string;
  time?: string;
}>;

export function StreetBox({
  streetName,
  distance,
  status,
  time,
  taskId
}: StreetBoxProps) {
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [showPauseButton, setShowPauseButton] = useState(false);
  const [showCompletedButton, setShowCompletedButton] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);
  const { changeStatus } = useContext(TasksContext);

  useEffect(() => {
    switch (currentStatus) {
      case taskStatus.pending:
        setShowPlayButton(true);
        setShowPauseButton(false);
        setShowCompletedButton(false);
        break;

      case taskStatus.active:
        setShowPlayButton(false);
        setShowPauseButton(true);
        setShowCompletedButton(true);
        break;

      case taskStatus.concluded:
        setShowPlayButton(false);
        setShowPauseButton(false);
        setShowCompletedButton(true);
        break;
    }
  }, [currentStatus]);

  function onChangeTaskHandler(action: TaskActions) {
    changeStatus(action, taskId);

    switch (action) {
      case 'play':
        setCurrentStatus(taskStatus.active);
        break;

      case 'pause':
        setCurrentStatus(taskStatus.pending);
        break;

      case 'finish':
        setCurrentStatus(taskStatus.concluded);
        break;
    }
  }

  return (
    <StreetBoxWrapper>
      <LeftContent>
        {showPlayButton && (
          <Feather
            name="play-circle"
            size={50}
            color={colors.main1}
            onPress={() => onChangeTaskHandler('play')}
          />
        )}
        {showPauseButton && (
          <>
            <Feather
              name="pause-circle"
              size={50}
              color={colors.main1}
              onPress={() => onChangeTaskHandler('pause')}
            />
            <Time>{time}</Time>
          </>
        )}
        {showCompletedButton && (
          <Feather
            name="check-circle"
            size={50}
            color={colors.main1}
            onPress={() => onChangeTaskHandler('finish')}
          />
        )}
      </LeftContent>
      <RightContent>
        <StreetName>
          {streetName}
        </StreetName>
        <DistanceLabel>{distance}km</DistanceLabel>
      </RightContent>
    </StreetBoxWrapper>
  );
}
