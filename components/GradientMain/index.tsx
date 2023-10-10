import { PropsWithChildren } from 'react';

import { gradients } from "../../global/styles/theme";
import { GradientBox } from './styles';

export type GradientProps = {
  focused?: boolean;
} & PropsWithChildren;

export function GradientMain({ children, focused = true }: GradientProps) {
  return (
    <GradientBox
      start={{
        x: 0,
        y: 0
      }}
      end={{
        x: 1,
        y: 1
      }}
      colors={
        focused
        ? gradients.main
        : gradients.disabled
      }
    >
      {children}
    </GradientBox>
  );
}