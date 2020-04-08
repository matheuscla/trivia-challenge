import React from 'react';

import QuestionOption from '../QuestionOption';

import { Card, Category, Container, Header, Question, Subtitle } from './styles';

const QuestionCard = ({ category, difficulty, question, questionNumber, onSelect }) => {
  const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
  
  const alternatives = shuffleArray([question.correct_answer, ...question.incorrect_answers]);

  return(
    <Container>
      <Card>
        <Header>
          <Subtitle>
            {`${questionNumber}/10`}
          </Subtitle>
          <Category>{category.name}</Category>
          <Subtitle>
            {difficulty.name}
          </Subtitle>
        </Header>
        <Question>{question.question}</Question>
        {alternatives.map(alternative => <QuestionOption onPress={() => onSelect(question, alternative)} key={alternative} title={alternative} /> )}
      </Card>
    </Container>
  );
}

export default QuestionCard;