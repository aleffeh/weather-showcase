import React from 'react';
import {
  Container,
  LocationContainer,
  LocationTitle,
  LocationIcon,
  DateTimeTitle,
  LocationSubtitle,
} from './styles';

export interface TimeAndLocationProps {
  currentDateTime: string;
  currentLocation: string;
}

export const TimeAndLocation: React.FC<TimeAndLocationProps> = props => {
  const {currentLocation, currentDateTime} = props;

  return (
    <Container>
      <DateTimeTitle>{currentDateTime}</DateTimeTitle>
      <LocationContainer>
        <LocationIcon />
        <LocationTitle>{currentLocation.split(',')[0]},</LocationTitle>
        <LocationSubtitle>{currentLocation.split(',')[1]}</LocationSubtitle>
      </LocationContainer>
    </Container>
  );
};
