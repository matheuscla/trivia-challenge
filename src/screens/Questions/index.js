import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getQuestions } from '../../store/ducks/game';

import Loading from '../../components/Loading';
import QuestionCard from '../../components/QuestionCard';

import { Container } from './styles';

const Questions = () => {
  const[loading, setLoading] = useState(true);
  const selected_category = useSelector(state => state.game.selected_category);
  const selected_difficulty = useSelector(state => state.game.selected_difficulty);
  const questions = useSelector(state => state.game.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchQuestions = async () => {
      await dispatch(getQuestions());
      setLoading(false);
    }

    fetchQuestions()
  }, [loading])

  return loading ? <Loading color={selected_category.color} /> : (
    <Container color={selected_category.color}>
      <QuestionCard 
        category={selected_category}
        difficulty={selected_difficulty} 
        question={questions[0]}
      />
    </Container>
  );
}

export default Questions;