import React from 'react';

import { Container, Title } from './styles';

const QuestionOption = ({ title, onPress }) => {
  return(
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
}

export default QuestionOption;