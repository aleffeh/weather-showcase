import styled from 'styled-components/native';
import {Image} from 'react-native';

export const Container = styled.View`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ForecastImage = styled(Image).attrs({
  resizeMode: 'contain',
})`
  width: 156px;
  height: 156px;
`;
