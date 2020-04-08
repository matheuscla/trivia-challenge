import styled from 'styled-components';

export const Container = styled.View`
  padding: 16px;
  padding-top: 30px;
  flex: 1;
  background: #745CCF;
  justify-content: space-around;
`

export const InnerContainer = styled.View`
  align-items: center;
   width: 100%;
`

export const Title = styled.Text`
  font-weight: 800;
  font-size: 24px;
  line-height: 32px;
  color: #FFFFFF;
`

export const MedalIcon = styled.Image`
  width: 36px;
  height: 36px;
  margin-bottom: 20px;
`

export const Text = styled(Title)`
  text-align: center;
  margin-top: ${props => props.marginTop ? `${props.marginTop}px` : 0};
  margin-bottom: ${props => props.marginBottom ? `${props.marginBottom}px` : 0};
`
