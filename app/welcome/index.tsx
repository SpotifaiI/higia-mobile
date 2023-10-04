import { useEffect, useMemo, useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { Background, Wrapper } from "../../global/styles/components";
import { welcomeContent } from './content';
import {
  Title,
  Hero,
  Phrase,
  Description,
  Container,
  ContentContainer
} from './styles';
import { GradientButton } from "../../components/GradientButton";

export default function Welcome() {
  const contentList = useMemo(() => welcomeContent, []);

  const [page, setPage] = useState(0);
  const [content, setContent] = useState(contentList[0]);

  useEffect(() => setContent(contentList[page]), [page]);

  function onPressedNext() {
    // if (page == welcomeContent.length - 1) {
    //   return router.replace('/login');
    // }
    //
    // setPage(page + 1);
  }

  return (
    <Background>
      <SafeAreaView>
        <Wrapper>
          <Container>
            <Title>{content.title}</Title>

            <ContentContainer>
              <Hero source={content.image} />
              <Phrase>{content.step_title}</Phrase>
              <Description>{content.subtitle}</Description>
            </ContentContainer>

            <GradientButton
              label={content.button_label}
              onHandler={onPressedNext}
            />
          </Container>
        </Wrapper>
      </SafeAreaView>
    </Background>
  );
}