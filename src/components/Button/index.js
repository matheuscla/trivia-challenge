import React from 'react';
import { Image } from 'react-native'; 

import { Container, Text } from './styles';


const Button = ({ title }) => {
  return(
    <Container>
      <Text>{title}</Text>
      <Image source={require('../../assets/right-arrow.png')}/>
    </Container>
  );
}

export default Button;