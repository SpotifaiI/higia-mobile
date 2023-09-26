import {PropsWithChildren} from "react";
import {TextProps} from "react-native";

import {LabelText} from "./styles";

export type InputLabelProps = {
  label?: string
} & PropsWithChildren<TextProps>;

export default function InputLabel({ children, label, ...rest }: InputLabelProps) {
  return (
    <LabelText {...rest}>{children || label}</LabelText>
  );
}