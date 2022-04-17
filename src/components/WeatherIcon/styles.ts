import styled from 'styled-components/native';
import {Image} from 'react-native';

export const Container = styled.View`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ForecastImage = styled(Image).attrs({
  resizeMode: 'contain',
})<{size?: number}>`
  width: ${props => props.size ?? 156}px;
  height: ${props => props.size ?? 156}px;
`;
