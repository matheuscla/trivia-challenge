import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getQuestions, setScore, setAnswer } from '../../store/ducks/game';

import Loading from '../../components/Loading';
import QuestionCard from '../../components/QuestionCard';
import Steps from '../../components/Steps';

import { Container } from './styles';

const Questions = ({ navigation }) => {
  const[loading, setLoading] = useState(true);
  const[currentStep, setCurrentStep] = useState(0);

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

  const checkAnwser = async (currentQuestion, answer) => {
    if(currentQuestion.correct_answer === answer) {
      await dispatch(setScore());
    }

    await dispatch(setAnswer(answer));

    if(currentStep === questions.length - 1) {
      navigation.navigate('Results');
    }

    setCurrentStep(currentStep + 1);
  }

  return loading ? <Loading color={selected_category.color} /> : (
    <Container color={selected_category.color}>
      <Steps current={currentStep}>
        {questions.map((question, index) => (
          <QuestionCard
            key={question}
            category={selected_category}
            difficulty={selected_difficulty}
            questionNumber={index + 1}
            question={question}
            onSelect={checkAnwser}
          />
        ))}
      </Steps>
    </Container>
  );
}

export default Questions;