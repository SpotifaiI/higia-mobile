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

import { FontAwesome } from "@expo/vector-icons"; 
import { colors } from "../../global/styles/theme";
import { GradientMain } from "../GradientMain";

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
          <FontAwesome  name="play-circle-o" size={50} color={
            colors.main1} />
        )}
      </LeftContent>
      <RightContent>
        <StreetName>{streetName}</StreetName>
        <DistanceLabel>{distance}km</DistanceLabel>
      </RightContent>
    </StreetBoxWrapper>
  );
}
