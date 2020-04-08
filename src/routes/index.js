import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Categories from '../screens/Categories';
import Difficulty from '../screens/Difficulty';
import Results from '../screens/Results';

const Stack = createStackNavigator();

const options = {
  headerShown: false
}

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={options} />
      <Stack.Screen name='Categories' component={Categories} options={options} />
      <Stack.Screen name='Difficulty' component={Difficulty} options={options} />
      <Stack.Screen name='Results' component={Results} options={options} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes;