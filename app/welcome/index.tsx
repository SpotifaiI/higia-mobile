import { SafeAreaView } from "react-native-safe-area-context";
import {
    Image
} from "react-native";

import {
    ButtonsContainer,
    Wrapper,
    Description,
    Header
} from "./styles";
import { useState } from "react";


export default function Welcome() {
    const [page, setPage] = useState(0);

    let DATA = [
        {
            key: 0,
            title: 'Bem-vindo ao Higia!',
            image: require('../../assets/0-welcome.png'),
            step_title: 'Simplificando a Limpeza Urbana para Você.',
            subtitle: 'Comece a gerenciar suas tarefas de limpeza de forma eficiente e veja a sua cidade brilhar.',
            button_label: 'Explorar recursos',
            step_image: '../../assets/0-step.png'
        },
        {
            key: 1,
            title: 'Explore todos os recursos!',
            image: require('../../assets/0-welcome.png'),
            step_title: 'Facilitando seu Dia a Dia de Trabalho.',
            subtitle: 'Gerencie suas tarefas do dia a dia, visualize no mapa todos os afazeres e acompanhe estatísticas sobre sua rotina de trabalho.<br><br>Tudo isso em um só lugar!',
            button_label: 'Avançar para começar',
            step_image: '../../assets/1-step.png'
        },
        {
            key: 2,
            title: 'É hora de agir!',
            image: require('../../assets/2-welcome.png'),
            step_title: 'Junte-se a nós na missão de tornar a cidade mais limpa e sustentável.',
            subtitle: 'Comece a explorar o Higia e faça a diferença agora!',
            button_label: 'Começar agora!',
            step_image: '../../assets/2-step.png'
        }
    ]

    return (
        <SafeAreaView style={{ backgroundColor: '#F5F5F5' }}>
            <Wrapper>
                <Header>
                    <Image style={{height: 50, width: 50}}  source={DATA[page].image} />
                    <Description>HIGIA</Description>
                </Header>

                <ButtonsContainer>

                </ButtonsContainer>
            </Wrapper>
        </SafeAreaView>
    );
}



/*
const DATA = [
  {
    text: "man",
    image: require('./assets/images/photo1.jpg')
  },
  {
    text: "woman",
    image: require('./assets/images/photo2.jpg')
  }
]

const App: () => React$Node = () => {
  const [imageVar, setImageVar] = useState(0);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Image style={{height: 50, width: 50}} source={DATA[imageVar].image}/>
        <Text> {imageVar}: {DATA[imageVar].text} </Text>
        <Button onPress={()=> {
          imageVar == (DATA.length - 1) ? setImageVar(0) : setImageVar(imageVar + 1);
          console.log(DATA[imageVar].image);
        }}
          title="Change Pic" />
      </SafeAreaView>
    </>
  );
};

*/