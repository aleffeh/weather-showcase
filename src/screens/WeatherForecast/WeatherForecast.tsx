import React, {useContext} from 'react';
import {Container} from './styles';
import {Button} from 'react-native';
import {AppThemeContext} from '@context/AppTheme';
import {ThemedText, ThemeSwitcher} from '@components';

const WeatherForecast: React.FC = () => {
  const {toggleTheme} = useContext(AppThemeContext);
  return (
    <Container>
      <ThemedText>Hello Amigos!</ThemedText>
      <ThemeSwitcher />
      <Button title={'Toggle Dark Mode!'} onPress={() => toggleTheme()} />
    </Container>
  );
};

export default WeatherForecast;
