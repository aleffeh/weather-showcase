import styled from 'styled-components/native';
import {Map as MapImage} from '@assets';
import {ThemedText} from '@components';
import {Image} from 'react-native';

export const Container = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
  background-color: ${props => props.theme.bgColor};
  display: flex;
`;

export const MapContainer = styled.View`
  flex: 4;
  justify-content: center;
  align-items: center;
`;

export const Map = styled(Image).attrs({
  source: MapImage,
})`
  min-width: 48px;
  max-width: 248px;
  min-height: 48px;
  max-height: 248px;
`;

export const TextContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
`;

export const Title = styled(ThemedText)`
  width: 248px;
  text-align: center;
`;

export const LocationButton = styled.Button``;
