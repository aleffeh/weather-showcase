import styled from 'styled-components/native';
import {ThemedText} from '@components';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.bgColor};
  display: flex;
  flex-direction: column;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const WeatherForecastText = styled(ThemedText)`
  font-weight: bold;
  margin-top: 30px;
`;

export const WeatherContainer = styled.View`
  flex-direction: column;
  align-items: center;
  z-index: 2;
  margin-top: 20px;
`;

export const LastUpdateContainer = styled.View`
  padding: 6px;
  border-width: 2px;
  border-radius: 18px;
  border-color: ${props => props.theme.accentColor};
  margin-bottom: 20px;
`;

export const LastUpdateText = styled.Text`
  color: ${props => props.theme.accentColor};
  font-size: 8px;
`;
