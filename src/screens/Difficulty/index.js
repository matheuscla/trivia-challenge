import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectDifficulty } from '../../store/ducks/game';

import Button from '../../components/Button';

import { Container, Title } from './styles';

const Difficulty = ({ navigation }) => {
  const difficulties = useSelector(state => state.game.difficulties);
  const dispatch = useDispatch();

  const chooseDifficulty = async name => {
    await dispatch(selectDifficulty(name));

    navigation.navigate('Questions');
  }

  return(
    <Container>
      <Title>Choose a difficulty {'\n'} to start</Title>
      {difficulties.map(difficulty => 
        <Button 
          onPress={() => chooseDifficulty(difficulty.name)}
          key={difficulty.name}
          marginBottom={24}
          title={difficulty.name}
          color={difficulty.color}
          icon={require('../../assets/difficulty.png')}
        />
      )}
    </Container>
  );
}

export default Difficulty;