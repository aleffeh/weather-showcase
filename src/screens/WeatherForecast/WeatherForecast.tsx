import React from 'react';
import {
  Container,
  Content,
  Header,
  LastUpdateContainer,
  LastUpdateText,
  WeatherContainer,
  WeatherForecastText,
} from './styles';

import {
  ThemeSwitcher,
  TimeAndLocation,
  WeatherIcon,
  WorldMap,
} from '@components';
import {Temperature} from '@screens/WeatherForecast/TemperatureText/Temperature';

const WeatherForecast: React.FC = () => {
  return (
    <Container>
      <Header>
        <TimeAndLocation
          currentDateTime={'22, Feb 2021'}
          currentLocation={'Uchoa, Brazil'}
        />
        <ThemeSwitcher />
      </Header>
      <Content>
        <WorldMap />
        <WeatherContainer>
          <LastUpdateContainer>
            <LastUpdateText>Atualizado há 10 minutos</LastUpdateText>
          </LastUpdateContainer>
          <WeatherIcon icon={'04d'} />
          <WeatherForecastText>Thunder</WeatherForecastText>
          <Temperature temperature={'13'} />
        </WeatherContainer>
      </Content>
    </Container>
  );
};

export default WeatherForecast;
