import { Feather } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";

import { GradientMain } from "../GradientMain";

export type iconMap = keyof typeof Feather.glyphMap;

export type TabBarIconProps = {
  size: number;
  focused: boolean;
  iconName: iconMap;
};

export function TabBarIcon({
  size, focused, iconName
}: TabBarIconProps) {
  return (
    <MaskedView
      style={{
        height: size,
        width: size
      }}
      maskElement={
        <Feather
          name={iconName}
          size={size}
        />
      }
    >
      <GradientMain focused={focused} />
    </MaskedView>
  );
}