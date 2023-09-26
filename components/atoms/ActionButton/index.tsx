import { TouchableOpacityProps } from 'react-native';

import {Button, ButtonText, Gradient} from './styles';
import {gradients} from "../../../utils/styles/theme";

export type ActionButtonProps = {
  label: string;
} & TouchableOpacityProps;

export default function ActionButton({
  label, ...rest
}: ActionButtonProps) {
  return (
    <Button {...rest}>
      <Gradient
        start={{
          x: 0,
          y: 0
        }}
        end={{
          x: 1,
          y: 1
        }}
        colors={gradients.main}
      >
        <ButtonText>{label}</ButtonText>
      </Gradient>
    </Button>
  );
}