import styled from 'styled-components/native';
import {ThemedText} from '@components';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
`;

export const TemperatureText = styled(ThemedText)`
  font-weight: bold;
  font-size: 86px;
`;

export const Celcius = styled.View`
  margin-top: 28px;
  margin-left: 2px;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  border-width: 2px;
  border-color: ${props => props.theme.accentColor};
`;
