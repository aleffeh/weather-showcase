import React, {useCallback} from 'react';
import {
  Container,
  ForecastTime,
  IconContainer,
  TemperatureText,
} from './styles';
import {WeatherIcon} from '@components';
import {HourlyForecast as HourlyForecastType} from '@store/weather/types';

export interface HourlyForecastProps {
  forecast?: HourlyForecastType;
}

export const HourlyForecast: React.FC<HourlyForecastProps> = props => {
  const {forecast} = props;

  const getTimeAMPMFormat = useCallback(dtInput => {
    const date = new Date(dtInput * 1000);
    let hours: string | number = date.getHours();
    let minutes: string | number = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
  }, []);

  return (
    <Container>
      <IconContainer>
        <WeatherIcon icon={forecast?.weather.icon ?? '01d'} size={36} />
      </IconContainer>
      <ForecastTime>{forecast && getTimeAMPMFormat(forecast.dt)}</ForecastTime>
      <TemperatureText>{forecast?.temp.toFixed()}°</TemperatureText>
    </Container>
  );
};
