import { PropsWithChildren } from "react";
import { TextProps } from "react-native-svg";

import { LabelText } from "./styles";

export type InputLabelProps = PropsWithChildren<TextProps>;

export function InputLabel({ children, ...rest }: InputLabelProps) {
  return (
    <LabelText {...rest}>{children}</LabelText>
  );
}