import styled from 'styled-components';

export const Container = styled.ScrollView`
  padding: 50px 18px 0 18px;
  flex: 1;
  background: #fff;
`

export const InnerContainer = styled.View`
  align-items: center;
  flex: 1;
  padding-bottom: 100px;

`

export const Divider = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-top-color: #F1F1F1;
  margin-bottom: 24px;
`

export const Title = styled.Text`
  font-weight: 800;
  font-size: 28px;
  line-height: 36px;
  color: #2B3A4A;
  text-align: center;
  margin-bottom: 24px;
  font-family: 'Poppins-Bold';
`

export const Icon = styled.Image`
  margin-bottom: 14px;
  width: 70px;
`