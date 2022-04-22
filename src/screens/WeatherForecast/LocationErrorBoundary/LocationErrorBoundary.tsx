import React from 'react';

import {Container, MapContainer, Map, TextContainer, Title} from './styles';
import {useAppDispatch, useAppSelector} from '@hooks';
import {Button} from 'react-native';
import {updateWeatherForecast} from '@store/weather';

export const LocationErrorBoundary: React.FC = () => {
  const hasError = useAppSelector(store => store.weather.hasError);
  const dispatch = useAppDispatch();

  if (!hasError) {
    return null;
  }

  return (
    <Container>
      <MapContainer>
        <Map />
      </MapContainer>
      <TextContainer>
        <Title>Por favor, permita o acesso à localização.</Title>
        <Button
          title={'Conceder Permissão'}
          onPress={() => dispatch(updateWeatherForecast())}
        />
      </TextContainer>
    </Container>
  );
};
