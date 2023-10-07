import { View } from "react-native";

import {
  ProgressBar,
  ProgressItem
} from './styles';
import { GradientMain } from "../GradientMain";

type StepProgressProps = {
  selected: number;
  stepAmount: number;
};

export function StepProgress({
   selected,
   stepAmount
}: StepProgressProps) {
  const stepList = [];
  let step;

  for (step = 0; step < stepAmount; step++) {
    if (step == selected) {
      stepList.push(<GradientMain />);
    } else {
      stepList.push(<View />);
    }
  }

  return (
    <ProgressBar>
      {stepList.map((step, index) => (
        <ProgressItem key={index}>
          {step}
        </ProgressItem>
      ))}
    </ProgressBar>
  );
}