
import { gradients } from "../../utils/styles/theme";
import { Button, ButtonText, Gradient } from './styles';

export type ActionButtonProps = {
  label: string;
  onHandler: () => void
};

export default function ActionButton({
  label, onHandler
}: ActionButtonProps) {
  return (
    <Button onPress={onHandler}>
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