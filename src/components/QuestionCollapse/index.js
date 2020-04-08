import React, { useState } from 'react';
import { View } from 'react-native';

import { Answer, Container, Question } from './styles';

const QuestionCollapse = ({ question, answer }) => {
  const[collapsed, setCollapsed] = useState(false);

  return(
    <Container onPress={() => setCollapsed(!collapsed)}>
      <View>
        <Question isCorrect={question.correct_answer.includes(answer)}>{question.question}</Question>
        {collapsed && <Answer>{answer}</Answer>}
      </View>
    </Container>
  );
}

export default QuestionCollapse;
