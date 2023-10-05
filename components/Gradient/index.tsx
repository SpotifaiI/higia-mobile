import { PropsWithChildren } from 'react';

import { GradientBox } from './styles';
import { gradients } from "../../global/styles/theme";

export type GradientProps = PropsWithChildren;

export function Gradient({ children }: GradientProps) {
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
      colors={gradients.main}
    >
      {children}
    </GradientBox>
  );
}