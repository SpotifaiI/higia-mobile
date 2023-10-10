import { router } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";

import { Container } from "./styles";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      router.replace('/login');
    }, 5000);
  }, []);

  return (
    <Container>
      <Text>
        Você está na tela inicial das tabs
      </Text>
    </Container>
  );
}