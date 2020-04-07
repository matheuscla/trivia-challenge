import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import tron from '../config/ReactotronConfig';

import gameReducer from './ducks/game'

const rootReducer = combineReducers({
  game: gameReducer
})

const reactotron = __DEV__ && tron.createEnhancer();

const store = createStore(
  rootReducer,
  __DEV__ 
  ? compose(applyMiddleware(thunk), reactotron)
  : compose(applyMiddleware(thunk))
);

export default store;