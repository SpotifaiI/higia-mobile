import { PropsWithChildren } from "react";

import { Label } from "../IconButton/styles";

export type ButtonTextProps = PropsWithChildren;

export function ButtonText({ children }: ButtonTextProps) {
  return (
    <Label>{children}</Label>
  );
}