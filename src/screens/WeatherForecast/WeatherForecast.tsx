import React, {useContext} from 'react';
import {Container} from './styles';
import {Button, Text} from 'react-native';
import {AppThemeContext} from '@context/AppTheme';

const WeatherForecast: React.FC = () => {
  const {toggleTheme} = useContext(AppThemeContext);
  return (
    <Container>
      <Text>Hello Amigos!</Text>
      <Button title={'Toggle Dark Mode!'} onPress={() => toggleTheme()} />
    </Container>
  );
};

export default WeatherForecast;
