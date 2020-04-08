import React from 'react';
import { useSelector } from 'react-redux';

import Button from '../../components/Button';

import { Container, Title } from './styles';
import imagePaths from './imagePaths';

const Categories = () => {
  const categories = useSelector(state => state.game.categories);

  return(
    <Container>
      <Title>Choose a category {'\n'} to start</Title>
      
      {categories.map(category => (
        <Button
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