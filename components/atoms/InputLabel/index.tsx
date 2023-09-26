import {PropsWithChildren} from "react";
import {TextProps} from "react-native";

import {LabelText} from "./styles";

export type InputLabelProps = PropsWithChildren<TextProps>;

export default function InputLabel({ children, ...rest }: InputLabelProps) {
  return (
    <LabelText {...rest}>{children}</LabelText>
  );
}