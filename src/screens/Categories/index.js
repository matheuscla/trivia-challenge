import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../store/ducks/game';

import Button from '../../components/Button';

import { Container, Title } from './styles';
import imagePaths from './imagePaths';

const Categories = ({ navigation }) => {
  const categories = useSelector(state => state.game.categories);
  const dispatch = useDispatch();

  const select = async (id) => {
    await dispatch(selectCategory(id));

    navigation.navigate('Difficulty');
  }

  return(
    <Container>
      <Title>Choose a category {'\n'} to start</Title>
      
      {categories.map(category => (
        <Button
          onPress={() => select(category.id)}
          icon={imagePaths[category.icon]}
          title={category.name}
          key={category.id}
          color={category.color}
          marginBottom={24}
        />
      ))}
    </Container>
  );
}

export default Categories;