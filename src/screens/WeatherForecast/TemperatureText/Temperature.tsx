import React from 'react';
import {Container, TemperatureText, Celcius} from './styles';

export interface TemperatureTextProps {
  temperature: string;
}

export const Temperature: React.FC<TemperatureTextProps> = props => {
  const {temperature} = props;
  return (
    <Container>
      <TemperatureText>{temperature}</TemperatureText>
      <Celcius />
    </Container>
  );
};
