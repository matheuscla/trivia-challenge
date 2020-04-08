import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  width: 100%;
  text-align: left;
`

export const Question = styled.Text`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: ${props => props.isCorrect ? '#6DB82A' : '#DD3E3E'};
`

export const Answer = styled.Text`
  margin-top: 8px;
  font-size: 14px;
  line-height: 22px;
  color: #2B3A4A;
`