import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getQuestions } from '../../store/ducks/game';

import QuestionCard from '../../components/QuestionCard';

import { Container } from './styles';

const Questions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchQuestions = async () => {
      await dispatch(getQuestions());
    }

    fetchQuestions()
  }, [])

  return(
    <Container>
      <QuestionCard />
    </Container>
  );
}

export default Questions;