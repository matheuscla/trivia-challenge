//Actions Types
export const Types = {
  SELECT_CATEGORY: 'game/SELECT_CATEGORY'
};

export const selectCategory = id => dispatch => {
  return dispatch({ type: Types.SELECT_CATEGORY, payload: id })
}

const INITIAL_STATE = {
  selected_category: null,
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
      name: 'music',
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
    default:
      return state;
  }
}