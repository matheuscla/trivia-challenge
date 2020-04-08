import React from 'react';

import { Card, Category, Container, Header, Question, Subtitle } from './styles';

const QuestionCard = () => {
  return(
    <Container>
      <Card>
        <Header>
          <Subtitle>
            1/10
          </Subtitle>
          <Category>Films</Category>
          <Subtitle>
            Hard
          </Subtitle>
        </Header>
        <Question>In the 1976 film Taxi Driver, how many guns did Travis buy from the salesman?</Question>
      </Card>
    </Container>
  );
}

export default QuestionCard;