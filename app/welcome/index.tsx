import { useEffect, useMemo, useState } from "react";
import { router } from "expo-router";
import {
  SafeAreaView,
  useSafeAreaInsets
} from "react-native-safe-area-context";

import { Background, Wrapper } from "../../global/styles/components";
import { welcomeContent } from './content';
import {
  Title,
  Hero,
  Phrase,
  Description,
  Container,
  ContentContainer,
  MaskedTitle, TextWrapper
} from './styles';
import { GradientButton } from "../../components/GradientButton";
import { GradientMain } from "../../components/GradientMain";
import {View} from "react-native";

export default function Welcome() {
  const safeArea = useSafeAreaInsets();
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
            <MaskedTitle
              maskElement={<Title>{content.title}</Title>}
            >
              <GradientMain />
            </MaskedTitle>

            <ContentContainer>
              <Hero source={content.image} />
              <TextWrapper>
                <Phrase>{content.step_title}</Phrase>
                <Description>{content.subtitle}</Description>
              </TextWrapper>
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