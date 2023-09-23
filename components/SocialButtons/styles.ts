import { styled } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Pressable = styled(RectButton)`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;