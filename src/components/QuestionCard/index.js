import React, { useSelector } from 'react';

import QuestionOption from '../QuestionOption';

import { Card, Category, Container, Header, Question, Subtitle } from './styles';

const QuestionCard = ({ category, difficulty, question }) => {
  const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
  
  const alternatives = shuffleArray([question.correct_answer, ...question.incorrect_answers]);

  return(
    <Container>
      <Card>
        <Header>
          <Subtitle>
            1/10
          </Subtitle>
          <Category>{category.name}</Category>
          <Subtitle>
            {difficulty.name}
          </Subtitle>
        </Header>
        <Question>{question.question}</Question>
        {alternatives.map(alternative => <QuestionOption key={alternative} title={alternative} /> )}
      </Card>
    </Container>
  );
}

export default QuestionCard;