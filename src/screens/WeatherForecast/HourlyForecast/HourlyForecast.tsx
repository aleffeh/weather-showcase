import React from 'react';
import {
  Container,
  ForecastTime,
  IconContainer,
  TemperatureText,
} from './styles';
import {WeatherIcon} from '@components';
import {WeatherIconsType} from '@components/WeatherIcon/IconsMap';

export interface HourlyForecastProps {
  forecastTime: string;
  weatherIcon: WeatherIconsType;
  temperature: string;
}

export const HourlyForecast: React.FC<HourlyForecastProps> = props => {
  const {forecastTime, weatherIcon, temperature} = props;
  return (
    <Container>
      <IconContainer>
        <WeatherIcon icon={weatherIcon} size={36} />
      </IconContainer>
      <ForecastTime>{forecastTime}</ForecastTime>
      <TemperatureText>{temperature}°</TemperatureText>
    </Container>
  );
};
