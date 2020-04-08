import React, { useState } from 'react';
import { View } from 'react-native';

import { Answer, Container, Question } from './styles';

const QuestionCollapse = () => {
  const[collapsed, setCollapsed] = useState(false);

  return(
    <Container onPress={() => setCollapsed(!collapsed)}>
      <View>
        <Question>Teste</Question>
        {collapsed && <Answer>aqui</Answer>}

      </View>
    </Container>
  );
}

export default QuestionCollapse;
