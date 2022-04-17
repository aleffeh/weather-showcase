import styled from 'styled-components';
import {Pressable, View} from 'react-native';
import Icon from '@components/Icons/MaterialCommunityIcons';
import {DarkTheme, LightTheme} from '@themes';

export const Container = styled(Pressable)`
  margin: 4px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 56px;
  border-radius: 20px;
  border: 1px solid ${p => p.theme.neutralColor};
`;

const getContainerBgColor = (props: any) => {
  if (props.theme === DarkTheme) {
    if (props.lightIcon) {
      return 'transparent';
    } else {
      return props.theme.accentColor;
    }
  }
  if (props.theme === LightTheme) {
    if (props.lightIcon) {
      return props.theme.accentColor;
    } else {
      return 'transparent';
    }
  }
};

export const IconContainer = styled(View)<{lightIcon?: boolean}>`
  background-color: ${props => getContainerBgColor(props)};
  padding: 2px;
  margin: 2px;
  border-radius: 26px;
`;

export const LightModeIcon = styled(Icon).attrs(props => ({
  iconName: 'weather-sunny',
  iconSize: 18,
  iconColor: props.theme === DarkTheme ? props.theme.neutralColor : 'white',
}))``;

export const DarkModeIcon = styled(Icon).attrs(props => ({
  iconName: 'weather-night',
  iconSize: 18,
  iconColor: props.theme === LightTheme ? props.theme.neutralColor : 'white',
}))``;
