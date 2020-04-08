import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';

import { Answer, Container, Header, Question } from './styles';

const QuestionCollapse = ({ question, answer }) => {
  const[collapsed, setCollapsed] = useState(false);
  
  return(
    <Container onPress={() => setCollapsed(!collapsed)}>
      <View>
        <Header>
          <Icon name={collapsed ? 'minus-circle' : 'plus-circle' } color={question.correct_answer.includes(answer) ? '#6DB82A' : '#DD3E3E'}/>
          <Question isCorrect={(question.correct_answer === answer)}>{question.question}</Question>
        </Header>
        {collapsed && <Answer>{answer}</Answer>}
      </View>
    </Container>
  );
}

export default QuestionCollapse;
