import React, {useEffect} from 'react';
import {
  Container,
  Content,
  Footer,
  Header,
  HourlyForecastsContainer,
  LastUpdateContainer,
  LastUpdateText,
  ReloadIcon,
  WeatherContainer,
  WeatherForecastText,
} from './styles';

import {
  ThemeSwitcher,
  TimeAndLocation,
  WeatherIcon,
  WorldMap,
} from '@components';
import {Temperature} from '@screens/WeatherForecast/TemperatureText/Temperature';
import {HourlyForecast} from '@screens/WeatherForecast/HourlyForecast/HourlyForecast';
import {TouchableOpacity} from 'react-native';
import {
  useAppDispatch,
  useAppSelector,
  useFormatedDate,
  useMinutesSinceUpdate,
} from '@hooks';
import {updateWeatherForecast} from '@store/weather';

const WeatherForecast: React.FC = () => {
  const state = useAppSelector(store => store.weather);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateWeatherForecast());
  }, [dispatch]);

  const formatedDate = useFormatedDate(new Date());
  const refreshMinutes = useMinutesSinceUpdate(state.lastUpdate);

  return (
    <Container>
      <Header>
        <TimeAndLocation
          currentDateTime={formatedDate}
          currentLocation={`${state.currentWeather?.city}, ${state.currentWeather?.country}`}
        />
        <ThemeSwitcher />
      </Header>
      <Content>
        <WorldMap />
        <WeatherContainer>
          <TouchableOpacity
            onPress={() => {
              dispatch(updateWeatherForecast());
            }}>
            <LastUpdateContainer>
              <ReloadIcon />
              <LastUpdateText>
                Atualizado há {refreshMinutes} minutos
              </LastUpdateText>
            </LastUpdateContainer>
          </TouchableOpacity>
          <WeatherIcon icon={state.currentWeather?.weather.icon ?? '50n'} />
          <WeatherForecastText>
            {state.currentWeather?.weather.main}
          </WeatherForecastText>
          <Temperature
            temperature={state.currentWeather?.temperature.toFixed() ?? ''}
          />
        </WeatherContainer>
      </Content>
      <Footer>
        <HourlyForecastsContainer>
          <HourlyForecast
            forecast={state.weatherForecast && state.weatherForecast[3]}
          />
          <HourlyForecast
            forecast={state.weatherForecast && state.weatherForecast[6]}
          />
          <HourlyForecast
            forecast={state.weatherForecast && state.weatherForecast[12]}
          />
        </HourlyForecastsContainer>
      </Footer>
    </Container>
  );
};

export default WeatherForecast;
