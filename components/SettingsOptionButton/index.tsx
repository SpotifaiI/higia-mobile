import { Feather } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

import {
  MenuButton,
  MenuButtonDescription,
  MenuButtonIconWrapper,
  MenuButtonText
} from './styles';

export type SettingsOptionButtonProps = {
  label: string;
} & TouchableOpacityProps;

export function SettingsOptionButton({
  label,
  ...rest
}: SettingsOptionButtonProps) {
  return (
    <MenuButton {...rest}>
      <MenuButtonText>
        <MenuButtonDescription>{label}</MenuButtonDescription>
        <MenuButtonIconWrapper>
          <Feather name="arrow-right" size={24} color="black" />
        </MenuButtonIconWrapper>
      </MenuButtonText>
    </MenuButton>
  );
}