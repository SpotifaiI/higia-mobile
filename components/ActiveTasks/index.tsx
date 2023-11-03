import { PropsWithChildren } from "react";
import { Text } from "react-native";
import {
  StreetBoxWrapper,
  LeftContent,
  PausedIcon,
  PlayIcon,
  Time,
  RightContent,
  DistanceLabel,
  StreetName
} from "./styles";

export type StreetBoxProps = PropsWithChildren<{
  streetName: string;
  distance: string;
  isPaused: boolean;
  time?: string;
}>;

export function StreetBox({
  streetName,
  distance,
  isPaused,
  time,
}: StreetBoxProps) {
  return (
    <StreetBoxWrapper>
      <LeftContent>
        {isPaused ? (
          <>
            <PausedIcon>Paused</PausedIcon>
            <Time>{time}</Time>
          </>
        ) : (
          <PlayIcon>Play</PlayIcon>
        )}
      </LeftContent>
      <RightContent>
        <StreetName>{streetName}</StreetName>
        <DistanceLabel>{distance}km</DistanceLabel>
      </RightContent>
    </StreetBoxWrapper>
  );
}
