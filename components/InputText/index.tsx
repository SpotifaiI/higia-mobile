import { TextInputProps } from "react-native";

import { Input } from "./styles";

export type InputTextProps = TextInputProps;

export default function InputText({ ...rest }: InputTextProps) {
  return (
    <Input {...rest} />
  );
}