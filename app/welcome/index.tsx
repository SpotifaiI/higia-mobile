import { router } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import {
  SafeAreaView
} from "react-native-safe-area-context";

import { GradientButton } from "../../components/GradientButton";
import { GradientMain } from "../../components/GradientMain";
import { StepProgress } from "../../components/StepProgress";
import { Background, Wrapper } from "../../global/styles/components";
import { welcomeContent } from './content';
import {
  Container,
  ContentContainer,
  Description,
  Footer,
  Hero,
  MaskedTitle,
  Phrase,
  TextWrapper,
  Title
} from './styles';

export function Welcome() {
  const contentList = useMemo(() => welcomeContent, []);
  const titleList = useMemo(
    () => contentList.map(
      (content, index) => getMaskedTitle(index, content.title)
    ),
    []
  );

  const [page, setPage] = useState(0);
  const [content, setContent] = useState(contentList[0]);

  useEffect(() => setContent(contentList[page]), [page]);

  function getMaskedTitle(key: number, title: string) {
    return (
      <MaskedTitle key={key}
        maskElement={<Title>{title}</Title>}
      >
        <GradientMain />
      </MaskedTitle>
    );
  }

  function onPressedNext() {
    if (page == welcomeContent.length - 1) {
      return router.replace('/login');
    }

    setPage(page + 1);
  }

  return (
    <Background>
      <SafeAreaView>
        <Wrapper>
          <Container>
            {titleList[page]}

            <ContentContainer>
              <Hero source={content.image} />
              <TextWrapper>
                <Phrase>{content.step_title}</Phrase>
                <Description>{content.subtitle}</Description>
              </TextWrapper>
            </ContentContainer>

            <Footer>
              <StepProgress
                selected={page}
                stepAmount={contentList.length}
              />

              <GradientButton
                label={content.button_label}
                onHandler={onPressedNext}
              />
            </Footer>
          </Container>
        </Wrapper>
      </SafeAreaView>
    </Background>
  );
}