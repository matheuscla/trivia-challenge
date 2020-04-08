import React from 'react';
import { Image } from 'react-native'; 

import { Container, Icon, Text, InnerContainer } from './styles';

const Button = ({ title, onPress, color, marginBottom, icon }) => {
  return(
    <Container onPress={onPress} color={color} marginBottom={marginBottom}>
      <InnerContainer>
        {icon && <Icon source={icon} />}
        <Text>{title}</Text>
      </InnerContainer>

      <Image source={require('../../assets/right-arrow.png')}/>
    </Container>
  );
}

export default Button;