import { ImageSourcePropType } from "react-native";

import { Button, ButtonText, Icon } from "./styles";

export type IconButtonProps = {
  label: string;
  onHandler: () => void;
  iconSource: ImageSourcePropType
};

export function IconButton({
  label,
  onHandler,
  iconSource
}: IconButtonProps) {
  return (
    <Button onPress={onHandler}>
      <Icon source={iconSource} />
      <ButtonText>{label}</ButtonText>
    </Button>
  );
}