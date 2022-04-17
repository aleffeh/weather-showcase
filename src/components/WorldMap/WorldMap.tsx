import React from 'react';
import {Map, MapContainer} from './styles';

export const WorldMap: React.FC = () => {
  return (
    <MapContainer>
      <Map viewBox={'20 0 1600 1000'} />
    </MapContainer>
  );
};
