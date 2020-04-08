import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.color};
  align-items: center;
  justify-content: center;
`

export const Label = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  font-weight: bold;
  margin-top: 16px;
`