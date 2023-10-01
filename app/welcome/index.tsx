import { router } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { welcomeContent } from './content';
import {
  ButtonsContainer,
  Description,
  Header,
  Wrapper
} from "./styles";


export default function Welcome() {
  const contentList = useMemo(() => welcomeContent, []);

  const [page, setPage] = useState(0);
  const [content, setContent] = useState(contentList[0]);

  useEffect(() => setContent(contentList[page]), [page]);

  function onPressedNext() {
    if (page == welcomeContent.length - 1) {
      return router.replace('/login');
    }

    setPage(page + 1);
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#F5F5F5' }}>
      <Wrapper>
        <Header>
          <Image
            key={`${content.key}-hero-image`}
            source={content.image}
          />
          <Description>HIGIA</Description>
          <Text>{content.title}</Text>
        </Header>

        <Image
          key={`${content.key}-step-image`}
          source={content.step_image}
        />

        <ButtonsContainer>
          <TouchableOpacity onPress={onPressedNext}>
            <Text>Ir para página {page + 2}</Text>
          </TouchableOpacity>
        </ButtonsContainer>
      </Wrapper>
    </SafeAreaView>
  );
}