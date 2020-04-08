import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container, Label } from './styles';

function Loading({ color }) {
  return(
    <Container color={color}>
      <ActivityIndicator color='#fff' size='large' />
      <Label>Loading...</Label>
    </Container>
  )
}

export default Loading;