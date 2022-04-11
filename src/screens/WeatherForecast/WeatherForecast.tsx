import React, {useContext} from 'react';
import {Container} from './styles';
import {Button} from 'react-native';
import {AppThemeContext} from '@context/AppTheme';
import {ThemedText} from '@components';
import Icon from '@components/Icons/MaterialCommunityIcons';

const WeatherForecast: React.FC = () => {
  const {toggleTheme} = useContext(AppThemeContext);
  return (
    <Container>
      <ThemedText>Hello Amigos!</ThemedText>
      <Icon iconName={'moon-waxing-crescent'} />
      <Button title={'Toggle Dark Mode!'} onPress={() => toggleTheme()} />
    </Container>
  );
};

export default WeatherForecast;
