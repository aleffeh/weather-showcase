import React from 'react';
import {Container, Header} from './styles';

import {ThemeSwitcher, TimeAndLocation} from '@components';

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
    </Container>
  );
};

export default WeatherForecast;
