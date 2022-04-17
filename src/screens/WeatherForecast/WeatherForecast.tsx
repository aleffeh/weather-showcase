import React from 'react';
import {
  Container,
  Content,
  Footer,
  Header,
  HourlyForecastsContainer,
  LastUpdateContainer,
  LastUpdateText,
  ReloadIcon,
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
import {HourlyForecast} from '@screens/WeatherForecast/HourlyForecast/HourlyForecast';
import {TouchableOpacity} from 'react-native';

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
          <TouchableOpacity onPress={() => {}}>
            <LastUpdateContainer>
              <ReloadIcon />
              <LastUpdateText>Atualizado há 10 minutos</LastUpdateText>
            </LastUpdateContainer>
          </TouchableOpacity>
          <WeatherIcon icon={'04d'} />
          <WeatherForecastText>Thunder</WeatherForecastText>
          <Temperature temperature={'13'} />
        </WeatherContainer>
      </Content>
      <Footer>
        <HourlyForecastsContainer>
          <HourlyForecast
            forecastTime={'1:00 pm'}
            temperature={'15'}
            weatherIcon={'10n'}
          />
          <HourlyForecast
            forecastTime={'5:30 pm'}
            temperature={'10'}
            weatherIcon={'02d'}
          />
          <HourlyForecast
            forecastTime={'18:00 am'}
            temperature={'15'}
            weatherIcon={'11d'}
          />
        </HourlyForecastsContainer>
      </Footer>
    </Container>
  );
};

export default WeatherForecast;
