import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background: ${props => props.color ? props.color : '#2B3A4A'};
  border-radius: 53px;
  width: 100%;
  padding: 18px 24px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : 0};
  margin-top: ${props => props.marginTop ? `${props.marginTop}px` : 0};
`

export const InnerContainer = styled.View`
  flex-direction: row;
`

export const Text = styled.Text`
  color: #FFFFFF;
  text-align: left;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  font-family: 'Poppins-Bold';
`

export const Icon = styled.Image`
  margin-right: 16px;
`