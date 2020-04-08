import React from 'react';

import { Container, Title } from './styles';

const QuestionOption = ({ title }) => {
  return(
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}

export default QuestionOption;