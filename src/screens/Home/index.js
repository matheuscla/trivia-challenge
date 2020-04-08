import React from 'react';

import Button from  '../../components/Button';

import { 
  Container,
  InnerContainer,
  Title,
  Text,
  MedalIcon
} from './styles';

const Home = ({ navigation }) => {
  return(
    <Container>
      <InnerContainer>
        <MedalIcon source={require('../../assets/medal.png')} />
        <Title>Welcome to the {'\n'} trivia challenge</Title>

        <Text marginTop={94} marginBottom={24}>You will be presented with 10 questions</Text>
        <Text>Can you score 100%?</Text>
      </InnerContainer>

      <InnerContainer>
        <Text marginBottom={24}>Let's get started</Text>
        <Button onPress={() => navigation.navigate('Categories')} title='Join game' />
      </InnerContainer>
    </Container>
  );
}

export default Home;