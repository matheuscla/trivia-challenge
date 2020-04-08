import React from 'react';

import QuestionCollapse from '../../components/QuestionCollapse';

import { Container, Icon, InnerContainer, Title } from './styles';

const Results = () => {
  return(
    <Container>
      <InnerContainer>
        <Icon source={require('../../assets/score.png')} />
        <Title>you scored {'\n'} 3/10</Title>
        
        <QuestionCollapse />
      </InnerContainer>
    </Container>
  );
}

export default Results;