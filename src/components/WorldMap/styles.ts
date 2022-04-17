import styled from 'styled-components/native';
import {WorldMap} from '@assets';
import {SvgProps} from 'react-native-svg';

export const MapContainer = styled.View`
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Map = styled(WorldMap)<SvgProps>`
  color: ${props => props.theme.worldMapColor};
  height: 300px;
`;
