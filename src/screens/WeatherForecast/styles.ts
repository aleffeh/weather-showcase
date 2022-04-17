import styled from 'styled-components/native';
import {ThemedText} from '@components';
import Icon from '@components/Icons/MaterialCommunityIcons';
import {TypedIconProps} from '@components/Icons/MaterialCommunityIcons/Icon';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.bgColor};
  display: flex;
  flex-direction: column;
`;

export const LastUpdateContainer = styled.View`
  padding: 6px;
  border-width: 2px;
  border-radius: 18px;
  border-color: ${props => props.theme.accentColor};
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LastUpdateText = styled.Text`
  color: ${props => props.theme.accentColor};
  font-size: 8px;
  margin-left: 2px;
`;

export const ReloadIcon = styled(Icon).attrs<TypedIconProps>(props => ({
  iconName: 'reload',
  iconColor: props.theme.accentColor,
  iconSize: 10,
}))`
  margin: 2px;
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
  margin-top: 50px;
`;

export const WeatherContainer = styled.View`
  flex-direction: column;
  align-items: center;
  z-index: 2;
  margin-top: 20px;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const HourlyForecastsContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-evenly;
  margin-bottom: 36px;
`;
