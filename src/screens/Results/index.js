import React from 'react';
import { useSelector } from 'react-redux';

import QuestionCollapse from '../../components/QuestionCollapse';
import Button from '../../components/Button';

import { Container, Divider, Icon, InnerContainer, Title } from './styles';

const Results = () => {
  const answers = useSelector(state => state.game.answers);
  const questions = useSelector(state => state.game.questions);
  const score = useSelector(state => state.game.score);

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

        <Button marginTop={48} title='Start new game' />
      </InnerContainer>
    </Container>
  );
}

export default Results;