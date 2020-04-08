import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
`

export const Card = styled.View`
  background: #fff;
  padding: 24px 16px;
  border-radius: 16px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 48px;
`

export const Category = styled.Text`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2B3A4A;
`

export const Subtitle = styled(Category)`
  color: #9AA5AB;
`

export const Question = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  color: #2B3A4A;
  text-align: center;
`