import styled from 'styled-components/native';
import {ThemedText} from '@components/ThemedText/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DarkTheme} from '@themes';

export const Container = styled.View`
  flex: 1;
  margin-left: 10px;
`;
export const DateTimeTitle = styled(ThemedText)``;

export const LocationContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const LocationTitle = styled(ThemedText)`
  font-weight: bold;
`;
export const LocationSubtitle = styled(ThemedText)``;

export const LocationIcon = styled(Icon).attrs(props => ({
  name: 'location-pin',
  size: 14,
  color: props.theme === DarkTheme ? props.theme.neutralColor : 'black',
}))``;
