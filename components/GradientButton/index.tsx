import { Button, ButtonText } from './styles';
import { GradientMain } from "../GradientMain";

export type ActionButtonProps = {
  label: string;
  onHandler: () => void
};

export function GradientButton({
  label, onHandler
}: ActionButtonProps) {
  return (
    <Button onPress={onHandler}>
      <GradientMain>
        <ButtonText>{label}</ButtonText>
      </GradientMain>
    </Button>
  );
}