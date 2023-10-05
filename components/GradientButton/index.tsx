import { Button, ButtonText } from './styles';
import { gradients } from "../../global/styles/theme";
import { Gradient } from "../Gradient";

export type ActionButtonProps = {
  label: string;
  onHandler: () => void
};

export function GradientButton({
  label, onHandler
}: ActionButtonProps) {
  return (
    <Button onPress={onHandler}>
      <Gradient>
        <ButtonText>{label}</ButtonText>
      </Gradient>
    </Button>
  );
}