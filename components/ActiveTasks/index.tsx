import React, { PropsWithChildren, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../global/styles/theme";
import {
  StreetBoxWrapper,
  LeftContent,
  Time,
  RightContent,
  DistanceLabel,
  StreetName,
} from "./styles";

export type StreetBoxProps = PropsWithChildren<{
  streetName: string;
  distance: string;
  status: string;
  time?: string;
}>;

export function StreetBox({
  streetName,
  distance,
  status,
  time,
}: StreetBoxProps) {
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [showPauseButton, setShowPauseButton] = useState(false);
  const [showCompletedButton, setShowCompletedButton] = useState(false);

  const handlePlayClick = () => {
    setShowPlayButton(false);
    setShowPauseButton(true);
    setShowCompletedButton(false);
  };

  const handlePauseClick = () => {
    setShowPlayButton(true);
    setShowPauseButton(false);
    setShowCompletedButton(true);
  };

  const handleCompletedClick = () => {
    // Adicione a lógica para lidar com o clique no botão de concluído
    setShowPlayButton(false);
    setShowPauseButton(false);
    setShowCompletedButton(false);
  };

  return (
    <StreetBoxWrapper>
      <LeftContent>
        {showPlayButton && (
          <FontAwesome
            name="play-circle-o"
            size={50}
            color={colors.main1}
            onPress={handlePlayClick}
          />
        )}
        {showPauseButton && (
          <>
            <FontAwesome
              name="pause-circle-o"
              size={50}
              color={colors.main1}
              onPress={handlePauseClick}
            />
            <Time>{time}</Time>
          </>
        )}
        {showCompletedButton && (
          <FontAwesome
            name="check-circle-o"
            size={50}
            color={colors.main1}
            onPress={handleCompletedClick}
          />
        )}
      </LeftContent>
      <RightContent>
        <StreetName>{streetName}</StreetName>
        <DistanceLabel>{distance}km</DistanceLabel>
      </RightContent>
    </StreetBoxWrapper>
  );
}
