import InputLabel, { InputLabelProps } from "../../atoms/InputLabel";
import InputText, { InputTextProps } from "../../atoms/TextInput";
import {InputContainer} from "./styles";

export type TextFieldProps = {
  inputText: InputTextProps;
  inputLabel: InputLabelProps
};

export default function TextField({
  inputLabel, inputText
}: TextFieldProps) {
  const { label } = inputLabel;

  return (
    <InputContainer>
      <InputLabel {...inputLabel}>{label}</InputLabel>
      <InputText {...inputText} />
    </InputContainer>
  );
}