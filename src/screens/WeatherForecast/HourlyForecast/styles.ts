import styled from 'styled-components/native';
import {ThemedText} from '@components';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const IconContainer = styled.View``;

export const ForecastTime = styled(ThemedText)`
  font-size: 10px;
`;

export const TemperatureText = styled(ThemedText)`
  font-weight: bold;
`;
