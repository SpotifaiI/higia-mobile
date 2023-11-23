import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import {
  MapButtonDescription,
  AntDesignWrapper,
  MapButtonText,
  Button,
} from "./styles";

export type ProfileDetailsProps = {
  onHandler: () => void;
};

export function AppearanceButton({ onHandler }: ProfileDetailsProps) {
  return (
    <Button onPress={() => {}}>
      <MapButtonText>
        <MapButtonDescription>Aparência</MapButtonDescription>
        <AntDesignWrapper>
          <AntDesign name="arrowright" size={18} color="black" />
        </AntDesignWrapper>
      </MapButtonText>
    </Button>
  );
}
