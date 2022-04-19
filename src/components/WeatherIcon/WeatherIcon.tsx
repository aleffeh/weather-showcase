import React from 'react';
import {Container, ForecastImage} from './styles';
import {icons, WeatherIconsType} from '@components/WeatherIcon/IconsMap';

export interface WeatherIconProps {
  icon: WeatherIconsType | string;
  size?: number;
}

export const WeatherIcon: React.FC<WeatherIconProps> = props => {
  const {icon, size} = props;
  return (
    <Container>
      <ForecastImage source={icons[icon]} size={size} />
    </Container>
  );
};
