import {put, takeEvery, call} from 'redux-saga/effects';
import {
  getCurrentWeatherSuccess,
  setLastUpdate,
  updateWeatherForecast,
  getWeatherForecastSuccess,
  getLocationError,
} from './reducer';
import HttpService from '../../services/HttpService';
import {api, LocationService} from '@services';
import {CurrentWeather, HourlyForecast, Location} from '@store/weather/types';
import {isoCountry} from 'iso-country';

function* getCurrentWeather(location: Location) {
  const currentWeather = yield HttpService.get(
    api.getCurrentWeather(location.lat, location.lon),
  );
  const data = currentWeather.data;
  const country = isoCountry(data.sys.country);

  const currentWeatherData: CurrentWeather = {
    weather: data.weather[0],
    temperature: data.main.temp,
    city: data.name,
    country: country?.name ?? '',
    coords: data.coord,
  };

  yield put(getCurrentWeatherSuccess(currentWeatherData));
}

function* getDailyForecast(location: Location) {
  const currentWeatherForecast = yield call(() =>
    HttpService.get(api.getForecast(location.lat, location.lon)),
  );

  const data = currentWeatherForecast.data.hourly.map(item => {
    const forecast: HourlyForecast = {
      dt: item.dt,
      temp: item.temp,
      weather: item.weather[0],
    };
    return forecast;
  });
  yield put(getWeatherForecastSuccess({...data}));
}

function* getWeatherForecast() {
  try {
    const location: Location = yield LocationService.getCurrentLocation();
    yield getCurrentWeather(location);
    yield getDailyForecast(location);
    yield put(setLastUpdate());
  } catch (error) {
    yield put(getLocationError());
  }
}

export function* weatherSagas() {
  yield takeEvery(updateWeatherForecast.type, getWeatherForecast);
}
