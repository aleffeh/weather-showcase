import React from 'react';
import {Container, ForecastImage} from './styles';
import {icons, WeatherIconsType} from '@components/WeatherIcon/IconsMap';

export interface WeatherIconProps {
  icon: WeatherIconsType;
}

export const WeatherIcon: React.FC<WeatherIconProps> = props => {
  const {icon} = props;
  return (
    <Container>
      <ForecastImage source={icons[icon]} />
    </Container>
  );
};
