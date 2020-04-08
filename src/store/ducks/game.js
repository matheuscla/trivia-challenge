import axios from 'axios';

//Actions Types
export const Types = {
  SELECT_CATEGORY: 'game/SELECT_CATEGORY',
  SELECT_DIFFICULTY: 'game/SELECT_DIFFICULTY',
  GET_QUESTIONS: 'game/GET_QUESTIONS',
  SET_SCORE: 'game/SET_SCORE'
};

export const selectCategory = id => dispatch => {
  return dispatch({ type: Types.SELECT_CATEGORY, payload: id });
}

export const selectDifficulty = name => dispatch => {
  return dispatch({ type: Types.SELECT_DIFFICULTY, payload: name });
}

export const getQuestions = () => async (dispatch, state) => {
  const { data } = await axios.get(`https://opentdb.com/api.php?amount=10&difficulty=${state().game.selected_difficulty.id}&category=${state().game.selected_category.id}`);

  return dispatch({ type: Types.GET_QUESTIONS, payload: data.results });
}

export const setScore = () => dispatch => {
  return dispatch({ type: Types.SET_SCORE });
}

const INITIAL_STATE = {
  score: 0,
  questions: [],
  selected_category: null,
  selected_difficulty: null,
  difficulties: [
    {
      id: 'easy',
      name: 'Easy',
      color: '#25489C'
    },
    {
      id: 'medium',
      name: 'Medium',
      color: '#6DB82A'
    },
    {
      id: 'hard',
      name: 'Hard',
      color: '#DD3E3E'
    }
  ],
  categories: [
    {
      id: 9,
      name: 'General Knowledge',
      icon: 'general',
      color: '#FF9C40'
    },
    {
      id: 21,
      name: 'Sports',
      icon: 'sports',
      color: '#DD3E3E'
    },
    {
      id: 11,
      name: 'Films',
      icon: 'film',
      color: '#25489C'
    },
    {
      id: 17,
      name: 'Science & Nature',
      icon: 'science',
      color: '#02C1EB'
    },
    {
      id: 12,
      name: 'Music',
      icon: 'music',
      color: '#745CCF',
    },
    {
      id: 22,
      name: 'Geography',
      icon: 'geo',
      color: '#6DB82A'
    }
  ]
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case Types.SELECT_CATEGORY:
      return { ...state, selected_category: state.categories.find(category => category.id === action.payload)}
    case Types.SELECT_DIFFICULTY:
      return { ...state, selected_difficulty: state.difficulties.find(difficulty => difficulty.name === action.payload)}
    case Types.GET_QUESTIONS:
      return { ...state, questions: action.payload }
    case Types.SET_SCORE:
      return { ...state, score: state.score++ };
    default:
      return state;
  }
}