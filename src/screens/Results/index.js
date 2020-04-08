import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { restartGame } from '../../store/ducks/game';

import QuestionCollapse from '../../components/QuestionCollapse';
import Button from '../../components/Button';

import { Container, Divider, Icon, InnerContainer, Title } from './styles';

const Results = ({ navigation }) => {
  const answers = useSelector(state => state.game.answers);
  const questions = useSelector(state => state.game.questions);
  const score = useSelector(state => state.game.score);

  const dispatch = useDispatch();

  const restart = async () => {
    await dispatch(restartGame());

    navigation.navigate('Home');
  }

  return(
    <Container>
      <InnerContainer>
        <Icon source={require('../../assets/score.png')} />
        <Title>you scored {'\n'} {score}/10</Title>
        
        <Divider />

        <Title>Questions</Title>
        {questions && questions.map((question, index) => (
          <QuestionCollapse key={question.question} question={question} answer={answers[index]} />
        ))}

        <Button onPress={restart} marginTop={48} title='Start new game' />
      </InnerContainer>
    </Container>
  );
}

export default Results;